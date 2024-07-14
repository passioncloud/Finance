export default function Heading({ children }: {children: React.ReactNode }) {
    return (
        <h1
            className="text-3xl underline font-bold">
            {children }
        </h1>
    )
}