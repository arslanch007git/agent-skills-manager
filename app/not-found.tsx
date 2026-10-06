import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-base-content/70 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link href="/skills" className="btn btn-ghost">
            Browse Skills
          </Link>
        </div>
      </div>
    </div>
  );
}

// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//         <div className="mx-auto max-w-screen-sm text-center">
//           <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
//             404
//           </h1>
//           <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
//             Something missing.
//           </p>
//           <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
//             Sorry, we cannot find that page. You will find lots to explore on
//             the home page.
//           </p>
//           <Link href={"/"} className="btn btn-primary">
//             Back to Homepage
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
