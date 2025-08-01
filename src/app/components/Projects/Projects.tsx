import { ProjectItem } from './ProjectItem/ProjectItem';
import accessImg from '../../access.png';
import twofaImg from '../../twofaImg.png'
import annualReportImg from '../../annualReportImg.jpg'
import { ExternalLink } from 'lucide-react';


export const Projects = (): JSX.Element => {
  const items = [
    {
      thumbImg: accessImg,
      title: 'Access Web (Internal IAM Tool)',
      discription: (
        <div className="mb-0 ">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">Access Web – Identity and Access Management Portal
            <button><ExternalLink className='hover:text-secondaryFont' size={23}/></button>

          </h2>
          <p className="text-gray-700 mb-4 text-secondaryFont">
            Next.js app designed to manage seller access and permissions across various apps and services.
            Used by over 2,500 sellers with 40k user accounts.
          </p>
          <ul className="list-disc list-outside text-gray-800 space-y-1 text-secondaryFont">
            <li><strong>Visual hierarchy tree:</strong> Visualization of permissions hierarchy.</li>
            <li><strong>Multi-role Selector:</strong> Assign multiple roles per user for flexible permission control.</li>
            <li><strong>Condition Builder:</strong> Dynamic rule configuration for granular access logic.</li>
            <li><strong>API Key Management:</strong> Generate, revoke, and track API credentials securely.</li>
          </ul>
        </div>
      )
    },
    {
      thumbImg: twofaImg, // Replace with your actual image or gif
      title: '2FA Authenticator (React Native App)',
      discription: (
        <div className="mb-0">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">2FA Authenticator
             <button><ExternalLink className='hover:text-secondaryFont' size={23}/></button>
             </h2>
          <p className="text-gray-700 mb-4 text-secondaryFont">
            A React Native application replacing WhatsApp/SMS OTP flows by leveraging device content providers.
            Designed for seller logins and internal tools, this app reduces OTP delivery costs significantly.
          </p>
          <ul className="list-disc list-outside text-gray-800 space-y-1 text-secondaryFont">
            <li><strong>Same-device login:</strong> Detects apps via content provider for seamless user experience.</li>
            <li><strong>CI/CD with Fastlane:</strong> Automated builds to streamline deployment.</li>
            <li>
              <strong>OTA Updates:</strong> Deliver JavaScript bundle updates over-the-air, enabling seamless user experience for minor improvements without requiring full app redeployments.
            </li>
          </ul>
        </div>
      )
    },
    {
  thumbImg: annualReportImg,
  title: 'Virtual Annual Report (2020)',
  discription: (
    <div className="mb-0">
      <h2 className="text-2xl font-bold mb-2">Virtual Annual Report – 2020 Interactive Showcase</h2>
      <p className="text-gray-700 mb-4 text-secondaryFont">
        A fully interactive web-based annual report built using <strong>Three.js</strong> and vanilla JavaScript.
        This engaging experience replaced traditional PDFs with an immersive 3D presentation and was nominated
        for the <em>MEMCOM Membership Excellence Award</em>.
      </p>
      <ul className="list-disc list-outside text-gray-800 space-y-1 text-secondaryFont">
        <li><strong>3D Navigation:</strong> Users explore sections through smooth camera transitions and scroll-based animations.</li>
        <li><strong>Responsive Layout:</strong> Adaptive design for both desktop and mobile viewing.</li>
        <li><strong>Data Highlights:</strong> Key performance indicators visualized in 3D space.</li>
        <li><strong>Award Nomination:</strong> Recognized for innovation in member communications.</li>
      </ul>
    </div>
  )
}
  ]
  return (
    <>
      <div
        className={`flex flex-col p-10 gap-5 align-middle justify-center md:w-4/6 text-black dark:text-primaryFont relative md:text-center`}
      >
        <h1 className=" text-5xl w-full text-white antialiased mb-5 md:text-8xl">
          My Works.
        </h1>
        <div className='w-full flex flex-col text-left gap-3'>
          {items.map((item, index) => (
            <ProjectItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}