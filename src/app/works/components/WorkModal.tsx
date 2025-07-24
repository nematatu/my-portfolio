"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { motion } from "framer-motion";
import RenderIcon from "./RenderIcon";
import { WorkItem } from "../const/type";
import Link from "next/link";
import { EaseDriver } from "@/components/ui/FadeIn";

type WorkModalProps = {
    isOpen: boolean;
    onClose: () => void;
    selectedWork: WorkItem | null;
};

export function WorkModal({ isOpen, onClose, selectedWork }: WorkModalProps) {
    if (!selectedWork) {
        return null;
    }
    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay asChild>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black/50"
                    />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="fixed mx-auto inset-0 my-auto overflow-y-auto max-h-[80vh] md:max-h-[56vh] lg:max-h-[88vh] w-[84vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none dark:bg-gray-800"
                    >
                        <Dialog.Title className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
                            {selectedWork.title}
                        </Dialog.Title>
                        <div className="relative w-full h-[200px] md:h-[400px] md:my-6">
                            <Image
                                src={selectedWork.imageUrl}
                                alt={selectedWork.title}
                                fill
                                style={{ objectFit: "contain" }}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="md:flex space-y-5 md:space-y-0 md:space-x-5">
                                <span className="font-bold text-gray-700 dark:text-gray-200">
                                    技術スタック
                                </span>
                                <div className="flex space-x-3 items-center ml-3 md:ml-0">
                                    {selectedWork.techStack.map((tech, index) => (
                                        <RenderIcon size={25} key={index} name={tech} />
                                    ))}
                                </div>
                            </div>

                            <div className="md:flex space-y-5 md:space-y-0 md:space-x-5">
                                <span className="font-bold">リンク</span>
                                <div className="md:flex space-y-3 md:space-y-0 md:space-x-3 ml-3 md:ml-0">
                                    {selectedWork.gitHubUrl && (
                                        <div className="flex space-x-3 items-center">
                                            <RenderIcon size={25} name="GitHub" />
                                            <Link
                                                target="_blank"
                                                className="font-bold underline underline-offset-2 text-blue-500 dark:text-blue-400"
                                                href={selectedWork.gitHubUrl}
                                            >
                                                GitHub
                                            </Link>
                                        </div>
                                    )}
                                    {selectedWork.url && (
                                        <div className="flex space-x-3 items-center">
                                            <RenderIcon size={25} name="ExternalLink" />
                                            <Link
                                                target="_blank"
                                                className="font-bold underline underline-offset-2 text-blue-500 dark:text-blue-400"
                                                href={selectedWork.url}
                                            >
                                                {selectedWork.url}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="py-4">
                                <EaseDriver />
                            </div>

                            <Dialog.Description className="tracking-widest text-gray-700 dark:text-gray-200 mb-4">
                                {selectedWork.fullDescription}
                            </Dialog.Description>
                        </div>
                        <Dialog.Close asChild>
                            <button
                                className="absolute top-[20px] right-[20px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none dark:text-white"
                                aria-label="Close"
                            >
                                <Cross2Icon />
                            </button>
                        </Dialog.Close>
                    </motion.div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
