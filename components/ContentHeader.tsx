interface ContentHeaderProps {
  query?: string;
  category?: string;
}
export default function ContentHeader({ query, category }: ContentHeaderProps) {
  // 同时包含过滤条件和搜索关键字
  if (query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "{query}" in <span className="capitalize">{category}</span>
      </h1>
    )
  }

  // 只包含搜索关键字
  if (query) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "{query}"
      </h1>
    )
  }

  // 只包含过滤条件
  if (category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        <span className="capitalize">{category}</span>
      </h1>
    )
  }
  return (
    <h1 className="heading3 self-start text-white-800">No Results</h1>
  )
}