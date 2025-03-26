import { InterviewCard } from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get iinterview ready with ai power practice and feedback</h2>
          <p className="text-lg">
            Practice on real initerview questiions and get iinstant feedback
          </p>
          <Button asChild className="btn-priimary max-sm:w-full">
            <Link href={"/interview"}>Start an interview</Link>
          </Button>
        </div>
        <Image
          src={"/robot.png"}
          alt="robot dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Intervews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}

          <p>You have no interviews yet</p>
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Iterview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          <p>There are no interviews available</p>
        </div>
      </section>
    </>
  );
}
