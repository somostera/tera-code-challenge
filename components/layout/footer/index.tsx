import Icon from "@/components/common/icon";
import { contactItems } from "@/utils/contact-items";
import { learningLinks } from "@/utils/learning-links";
import { usefulLinks } from "@/utils/useful-links";
import Link from "next/link";

interface CustomLinkProps {
  label: string;
  href: string;
}

const CustomLink = ({ label, href }: CustomLinkProps) => (
  <div className="py-2">
    <Link href={href}>
      <span className="text-md text-gray-500 hover:text-emerald-500 transition">
        {label}
      </span>
    </Link>
  </div>
);

interface ContactItemProps {
  label: string;
  icon: Icon;
}

const ContactItem = ({ label, icon }: ContactItemProps) => (
  <div className="py-2 flex items-center gap-3">
    <Icon name={icon} className="w-5 h-5 text-emerald-500" />
    <span className="text-md text-gray-500">{label}</span>
  </div>
);

const Footer = () => {
  return (
    <div className="bg-amber-50 p-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div className="px-3">
            <Icon
              name="logoColor"
              className="h-20 w-50"
              viewBox="0 0 422 116"
            />
            <p className="text-md text-gray-500 mt-3">
              We support programs that create advancement for people
            </p>
          </div>
          <div className="px-3">
            <h6 className="text-lg text-blue-950 font-semibold mb-4">
              Links Úteis
            </h6>
            {usefulLinks.map(({ label, href }) => (
              <CustomLink key={label} href={href} label={label} />
            ))}
          </div>
          <div className="px-3">
            <h6 className="text-lg text-blue-950 font-semibold mb-4">Ensino</h6>
            {learningLinks.map(({ label, href }) => (
              <CustomLink key={label} href={href} label={label} />
            ))}
          </div>
          <div className="px-3">
            <h6 className="text-lg text-blue-950 font-semibold mb-4">
              Contato
            </h6>
            {contactItems.map(({ label, icon }) => (
              <ContactItem key={label} icon={icon} label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
