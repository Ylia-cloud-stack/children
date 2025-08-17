type LinkItem = {
    label?: string;
    href?: string;
};

type Props = {
    value?: LinkItem | LinkItem[];
};

export const Item = ({ value }: Props) => {
    if (!value) return null;

    if (Array.isArray(value)) {
        if (value.length === 0) return null;

        return (
            <div className="flex flex-col items-end gap-1">
                {value.map((item, i) => {
                    if (!item?.label) return null;

                    return item.href ? (
                        <a
                            key={`${item.href}-${i}`}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fuchsia-800 underline hover:no-underline max-[768px]:text-[0.4375rem]"
                        >
                            {item.label}
                        </a>
                    ) : (
                        <p key={i} className="text-sm max-w-[550px] text-right max-[768px]:text-[0.4375rem]">
                            {item.label}
                        </p>
                    );
                })}
            </div>
        );
    }

    const { label, href } = value;

    if (label && href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-800 underline hover:no-underline max-[768px]:text-[0.4375rem]"
            >
                {label}
            </a>
        );
    }

    if (label) {
        return <p className="text-sm max-w-[550px] text-right max-[768px]:text-[0.4375rem]">{label}</p>;
    }

    return null;
};
