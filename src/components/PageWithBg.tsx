import type {ReactNode} from "react";


type Props = { src: string; children: ReactNode };

export default function PageWithBg({ src, children }: Props) {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat pt-[150px]"
            style={{ backgroundImage: `url(${src})` }}
        >
            {children}
        </div>
    );
}