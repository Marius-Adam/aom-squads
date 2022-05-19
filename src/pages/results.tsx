import { useEffect, useState } from 'react';

import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import MotionDiv from '@/components/MotionDiv/MotionDiv';

const Results = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 3500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (initialLoading) return <LoadingSpinner />;

  return (
    <MotionDiv>
      <div className="flex h-screen w-screen items-center justify-center bg-black text-center text-3xl text-white">
        This page will contain the results (recommended squads)
      </div>
    </MotionDiv>
  );
};

export default Results;
