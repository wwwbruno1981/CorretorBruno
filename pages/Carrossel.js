import Link from "next/link";

function Carrossel (props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <>
       
        <div>{dynamicDateString} (dinamico)</div>
        <div>{props.staticDateString} (statico)</div>
        
        <div>
        <Link href="/">
        <a>Pagina dos Home</a>
        </Link>
        </div>

        </>
    )
}
 export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
   
    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }

 }
export default Carrossel 