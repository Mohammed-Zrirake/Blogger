
import Hero from './../components/ui/hero';


type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  
  return (
    <main>
      <Hero />
    
    </main>
  );
}
