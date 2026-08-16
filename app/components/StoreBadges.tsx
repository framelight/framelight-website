import Image from 'next/image';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/site';

type StoreBadgesProps = {
  className?: string;
  priority?: boolean;
};

export function StoreBadges({
  className = '',
  priority = false,
}: StoreBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Framelight on the App Store"
        className="inline-flex shrink-0 rounded-lg"
      >
        <Image
          src="/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          width={144}
          height={48}
          priority={priority}
          className="h-10 w-auto md:h-12"
        />
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Framelight on Google Play"
        className="inline-flex shrink-0 rounded-lg"
      >
        <Image
          src="/badges/get-it-on-google-play.svg"
          alt="Get it on Google Play"
          width={162}
          height={48}
          priority={priority}
          className="h-10 w-auto md:h-12"
        />
      </a>
    </div>
  );
}
