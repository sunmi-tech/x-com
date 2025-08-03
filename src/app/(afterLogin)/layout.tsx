export default function AfterLoginLayout( {children}: {children: React.ReactNode} ) {
    return (
        <div>
            <h1>After Login Layout</h1>
            {children}
        </div>
    )
}