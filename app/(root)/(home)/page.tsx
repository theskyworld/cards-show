import SearchForm from "@/components/SearchForm";

export default function HomePage() {
  return (
    <>
      <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
        <section className="nav-padding w-full">
          {/* 其中的bg-banner的效果通过backgroundImage配置选项进行指定 */}
          <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
            <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
              JavaScript Mastery Resources
            </h1>
          </div>
          {/* 搜索框 */}
          <SearchForm/>
        </section>
      </main>

    </>
  );
}
