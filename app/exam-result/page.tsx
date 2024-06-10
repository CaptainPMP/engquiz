'use cilent'
import { useRouter } from 'next/navigation';
import Navbar from '@/components/NavBar';
import Link from 'next/link';
import Footer from '@/components/Footer';


function ExamResult() {
  const router = useRouter();
  const { score, total } = router.query;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Your Score: {score}/{total}</h1>
        <Link href="/homepage">
          <button className="bg-custom-pink hover:bg-custom-footer text-white font-bold py-2 px-4 rounded mt-10 mb-10">
            Back to Homepage
          </button>
        </Link>
      </div>
        <Footer />
    </>
  );
}

export default ExamResult;
