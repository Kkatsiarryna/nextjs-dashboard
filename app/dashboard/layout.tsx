import SideNav from '@/app/ui/dashboard/sidenav';

//для создания пользовательского интерфейса, который является общим для нескольких страниц
//Любые компоненты, которые вы импортируете в этот файл, будут частью макета

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}

// Компонент <SideNav>не опирается на данные и не персонализируется под пользователя,
//     поэтому он может быть статичным .
//
//children
//     Компоненты <Page>опираются на данные, которые часто меняются,
//     и будут персонализированы для пользователя, поэтому они могут быть динамичными .