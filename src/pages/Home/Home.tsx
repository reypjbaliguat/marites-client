import { AvatarSection, MenuSection, MessageSection } from './components';

function Home() {
    return (
        <div className="w-screen h-screen p-3 lg:p-6 bg-blue-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-white lg:h-[calc(100vh-48px)] rounded-xl divide-x lg:divide-y-0 divide-y">
                <div className="col-span-1 lg:col-span-1">
                    <AvatarSection />
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <MenuSection />
                </div>
                <div className="col-span-1 lg:col-span-8">
                    <MessageSection />
                </div>
            </div>
        </div>
    );
}

export default Home;
