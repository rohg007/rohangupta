import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={clsx(
                "mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-24", // Generous padding for "spacious" feel
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
