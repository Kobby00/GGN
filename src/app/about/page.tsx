import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function about() {
  return (
    <section className="p-5 flex flex-col gap-7">
      <div className="">
        <h1 className="bold-32">Who We Are</h1>
      </div>
      <div>
        <Image
          src={"https://i.ibb.co/t33w0wf/medicals.jpg"}
          width={1000}
          height={100}
          alt="image"
          className="w-full h-[20rem] object-cover lg:h-[30rem]"
        />
      </div>
      <div className="">
        <p>
          Good News Network is an NGO dedicated to sharing the gospel and
          supporting communities, especially children and the elderly. Through
          their spiritual mission and practical humanitarian efforts, they
          spread hope, provide assistance, and advocate for those in need,
          embodying the values of compassion and service.
        </p>
      </div>
      <div>
        <h1 className="bold-32">Our Mission</h1>
        <br />
        <p>
          At Good News Network, our mission is to spread the transformative
          message of the gospel, bringing hope and inspiration to individuals
          and communities around the world. Through our spiritual outreach
          efforts, we aim to ignite hearts with love, compassion, and faith,
          fostering spiritual growth and renewal.
          <br />
          <br />
          Committed to holistic community development, we extend our hands to
          those in need, particularly vulnerable populations such as children
          and the elderly. Through practical humanitarian initiatives, including
          educational programs, healthcare services, and social assistance, we
          strive to uplift lives and create a more just and equitable society.
          <br />
          <br />
          Driven by the values of compassion and service, we work tirelessly to
          make a positive impact, empowering individuals to thrive and
          experience the boundless love and grace of God. Together, we envision
          a world where all are embraced with hope, dignity, and the promise of
          a brighter tomorrow.
        </p>
      </div>
      <div className="ceo">
        <Image
          src={"https://i.ibb.co/8KH2Ggf/ceo.jpg"}
          width={1000}
          height={100}
          alt="image"
          className="w-full h-[20rem] object-cover lg:h-[30rem]"
        />
        <br />
        <h1 className="bold-32">Our Founder</h1>
        <br />
        <p>
          Our esteemed founders, Lawrence Anin Botwe and Dr. Amoako Atta, lead
          Good News Network with vision and dedication. Together with our
          leadership teams, they empower communities worldwide towards positive
          transformation and self-driven progress.
        </p>
        <br />

        <Link href={"/about/leadership"} className="flex items-center gap-4">
          <h3 className="bold-18 hover:text-orange-50">Meet Our Leadership</h3>
          <BsArrowRight />
        </Link>
      </div>
      <div>
        <Image
          src={"https://i.ibb.co/QpsQFTx/give.jpg"}
          width={1000}
          height={100}
          alt="image"
          className="w-full h-[20rem] object-cover lg:h-[30rem]"
        />
        <br />
        <h1 className="bold-32">Why Give</h1>
        <br />
        <p>
          We are committed to complete transparency and making the most of every
          amount we receive. Our mission is only made possible through the
          trusted relationships we've built over 10 years with a generous
          community of humanitarians.
        </p>
        <br />
        <div className="flex items-center gap-4">
          <h3 className="bold-18 hover:text-orange-50">Learn More</h3>
          <BsArrowRight />
        </div>
      </div>
    </section>
  );
}
