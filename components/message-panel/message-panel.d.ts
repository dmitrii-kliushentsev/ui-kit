import { Message } from './message-type';
interface Props {
    className?: string;
    message: Message;
    onClose(): void;
}
export declare const MessagePanel: ({ className, message: { type, text }, onClose }: Props) => JSX.Element;
export {};
