import { UserButton, auth, currentUser } from "@clerk/nextjs";

const MemberProfile = async () => {
  const user = await currentUser();
  const { userId }: { userId: string | null } = auth();
  return (
    <div className="flex items-center gap-2">
      <UserButton afterSignOutUrl="/" />
      <span className="">{user?.emailAddresses[0].emailAddress}</span>
    </div>
  );
};
export default MemberProfile;
