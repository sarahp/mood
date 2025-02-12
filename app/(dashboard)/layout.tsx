import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col h-screen w-screen">
            <aside className="absolute top-0 left-0 h-full w-[200px] border-right border-black/10%">Mood</aside>
            <div className="ml-[200px]">
                <header className="flex justify-between items-center h-[60px] border-b border-black/10%">
                    <h1>Dashboard</h1>
                    <div className="h-full w-full px-6 justify-end flex items-center">
                        <UserButton />
                    </div>
                </header>
                <main className="h-full overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
