"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Props {
  targetUserId: string;
  currentUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
}

const ProfileHeader = ({
  targetUserId,
  currentUserId,
  name,
  username,
  imgUrl,
  bio,
}: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col justify-start flex-row">
      <div
        className={`flex items-center justify-between ${
          targetUserId === currentUserId ? "flex-row-reverse" : ""
        }`}
      >
        {targetUserId === currentUserId && (
          <Link
            href={`${pathname}/change`}
            className="px-4 py-2 text-light-2  border border-gray-700  rounded-lg"
          >
            Change
          </Link>
        )}

        <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt=""
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-left text-heading3-bold text-light-1">
              {name}
            </h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
          </div>
        </div>
      </div>
      <p className="mt-6 max-w-lg text-base-regular text-light-2">{bio}</p>
      <div className="mt-12 h-0.5 w-full  bg-neutral-700" />
    </div>
  );
};

export default ProfileHeader;
