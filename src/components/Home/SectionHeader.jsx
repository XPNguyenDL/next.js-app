export default function SectionHeader({ subtitle, title }) {
    return (
        <div className='mt-4 md:mt-8 xl:mt-12 font-bold text-center'>
            <p className='text-sm tracking-widest uppercase'>{subtitle}</p>
            <p className='my-6 text-3xl md:text-4xl xl:text-5xl capitalize'>{title}</p>
        </div>
    );
}
