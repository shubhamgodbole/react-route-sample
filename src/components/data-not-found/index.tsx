import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import MiniLoader from "../loading/MiniLoader";

interface Props {
  title: string;
  loading?: boolean;
}

const NoDataFound = ({ title, loading }: Props) => {
  if (loading) {
    return (
      <Card className="my-6 flex h-80 flex-col items-center justify-center gap-5">
        <Skeleton className="flex size-full flex-col items-center justify-center">
          <MiniLoader />
        </Skeleton>
      </Card>
    );
  }
  return (
    <Card className="my-6 flex h-80 flex-col items-center justify-center gap-5">
      <CardContent className="flex flex-col items-center justify-center">
        <p className="text-wrap text-xl text-center text-gray-400">{title}</p>
      </CardContent>
    </Card>
  );
};

export default NoDataFound;
