import { Agent } from "@/components/Agent";

export default function InterviewPage() {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName={"You"} userId={"user1"} type={"generate"} />
    </>
  );
}
