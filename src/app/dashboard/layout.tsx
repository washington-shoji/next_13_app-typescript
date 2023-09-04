import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbarr/navbar"

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" flex w-full h-screen">
            <Navbar></Navbar>
            <section className=" flex-col w-full">
                {children}
                <Footer></Footer>
            </section>
        </div>
    )
}

export default DashboardLayout