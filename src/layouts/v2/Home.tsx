import Logo from "@/components/icons/logo.svg";

import NewsPaper from "@/components/icons/japan/B_newspaper.svg";
import Sushi from "@/components/icons/japan/F_sushi.svg";
import Taiyaki from "@/components/icons/japan/F_taiyaki.svg";

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen min-w-screen p-8">
            <div className="w-3/4 lg:w-1/4 mx-auto">
                <div className="w-full pt-12 pr-12 pl-12">
                    <div className="rounded-[28px] bg-white p-[8px]">
                        <Logo className="rounded-[20px]" />
                    </div>
                </div>

                <div className="px-7">
                    <p className="text-[30px] tracking-widest my-6">Amtt</p>
                    <div>
                        <div className="space-y-5 text-sm tracking-widest">
                            <div className="flex space-x-5 items-center">
                                <Taiyaki className="w-[24px]" />
                                <p className="">About/</p>
                            </div>
                            <div className="flex space-x-5 items-center">
                                <Sushi className="w-[24px]" />
                                <p className="">Works/</p>
                            </div>
                            <div className="flex space-x-5 items-center">
                                <NewsPaper className="w-[24px]" />
                                <p className="">Blog/</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
