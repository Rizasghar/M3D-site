import React, { useState } from "react";
import {
  Container, Grid
} from "@mui/material";
import Header from "../../../components/Header";
import Link from "next/link";
import Head from 'next/head';


const PrivacyPolicyPage = () => {
  const [navbarColor, setNavbarColor] = useState("rgba(74, 74, 74, 0.9)");

  return (
    <Container
      sx={{
        maxWidth: "90%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "2rem",
        marginTop: "55px",
      }}
    >
        <Head>
        <title>M3D Website | PrivacyPolicy</title>
      </Head>
      <Header navbarColor={navbarColor} />

      <Grid
      sx={{   marginTop:"5vh"}}
      container spacing={2}>
        

        <Grid item xs={12} md={9} sx={{ paddingLeft: { xs: "1rem", md: 0 } }}>
          <div>
            <h1 style={{fontSize:"40px"}} >Privacy &amp; Policy</h1>
            <h4>Last updated May 1st, 2024</h4>
          </div>
          <p style={{ color: "#6f6f6f" }}>
            M3D (including M3D, Inc., its subsidiaries and affiliates) wants you
            to know that your privacy is important to us. Our customers are at
            the heart of everything we do, and we strive to ensure your
            experience with M3D is one that you will want to repeat and share
            with your friends and colleagues. Part of our commitment to you is
            to respect and protect the privacy of the personal information you
            provide to us. The information below is designed to inform you of
            what information we collect, why we collect such information, how we
            use the information we collect, and the choices we offer, including
            how to access and update information. Any reference to our “Site”
            includes our M3D website, mobile applications and other software,
            and any reference to our “Services” includes our Site, customer
            service phone line and other service offered by M3D.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            M3D will occasionally update this Privacy Policy. When a revision is
            made we will revise the &quot;last updated&quot; date on this page.
            We may make additional features, functionality, offers, activities,
            or events available to you subject to additional or different
            privacy rules that we disclose in connection with those
            opportunities.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            In this policy, “personal information” means any information
            relating to an identified or identifiable individual who engages
            with our Services or otherwise becomes a customer of M3D.
          </p>
          <h1>Collection, Use, And Sharing Of Information</h1>
          <p style={{ color: "#6f6f6f" }}>
            At various times when you visit our Site or use our Services, you
            may decide to provide us with your personal information. You should
            know that we receive and may store all personal information (whether
            written or oral) that you provide to us. We may also collect certain
            information automatically from you. Depending on how you interact
            with our Site or Services, we may collect, use, and share the
            following categories of information about you (unless otherwise
            restricted by law):
          </p>
          <ul>
            <li  >
              <a  href="#navigateheading">When You Navigate to Our Site</a>
            </li>
            <li>
              <a href="#navigateheadingtwo">When You Interact with Features on Our Site</a>
            </li>
            <li>
              <a href="#navigateheadingthree">When You Make a Purchase with Us</a>
            </li>
            <li>
              <a href="#navigateheadingseven">
                When You Contact M3D customer Service via Phone,
                E-mail, Chat or in Person
              </a>
            </li>
            <li>
              <a href="#navigateheadingfour">
                When You Submit Information for Marketing Purposes, to Share
                Items with a Friend or for Participation in Sweepstakes
              </a>
            </li>
            <li>
              <a href="#navigateheadingfive">When You Review a Product</a>
            </li>
            <li>
              <a href="#navigateheadingsixth">When You Interact with Us via Social Media</a>
            </li>
          </ul>
          <h2 id="navigateheading" >
            <a id="pp_two"></a>When You Navigate to Our Site
          </h2>
          <h3>
            <a id="pp_two"></a>Categories Of Data We May Collect
          </h3>
          <ul>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                Information gathered through cookies and other tracking
                technology (see the Tracking Technology section for more
                information)
              </p>
            </li>
            <li>
              <p style={{ color: "#6f6f6f" }}>Device and browser information</p>
            </li>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                Information gathered through web server logs
              </p>
            </li>
            <li>
              <p style={{ color: "#6f6f6f" }}>General location information</p>
            </li>
          </ul>
          <h2>
            <a id="pp_four"></a>How We May Use The Data Collected
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                {" "}
                To run essential features on the site
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                {" "}
                To optimize the performance of the site
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                {" "}
                To detect security issues and prevent fraud
              </p>
            </li>

            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                {" "}
                To offer you personalized content, including by providing
                customized content and advertising, which may be on our Site,
                other websites, mobile devices or applications, or other
                channels (whether online or offline)
              </p>
            </li>

            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                {" "}
                To understand our customer demographics, preferences, interests,
                and behavior
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                {" "}
                To improve marketing and promotional efforts, and overall
                customer experience
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                {" "}
                To associate activities with other personal information about
                you including association with your email or home address.
              </p>
            </li>
          </ul>
          <h3>Who We May Share Your Data With</h3>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Site optimization service providers
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Site security service providers
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Marketing service providers</p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Consequences Of Not Providing Data
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>The Site may not run correctly</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                You may not be able to make a purchase
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                You may not receive M3D marketing
              </p>
            </li>
          </ul>
          <h2 id="navigateheadingtwo" >
            <a id="pp_five"></a>When You Interact with Features on Our Site
            <br></br>
            Categories Of Data We May Collect
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Information gathered through cookies
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your product browsing history</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Information provided through your Wishlist
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>How We May Use The Data Collected
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To provide you information on items you viewed recently
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To provide and improve our services and product offerings, and
                develop new ones
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To understand our customer demographics, preferences, interests,
                and behavior
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Who We May Share Your Data With
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Service providers who power the features on our Site
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Consequences Of Not Providing Data
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                We will not be able to provide you with personalized content
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Some features on our site will not be able to run
              </p>
            </li>
          </ul>
          <h2 id="navigateheadingthree" >
            <a id="pp_five"></a>When You Make a Purchase with Us<br></br>
            Categories Of Data We May Collect
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your full name</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your phone number</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your e-mail address</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your physical address</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your payment information</p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>How We May Use The Data Collected
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To facilitate your purchase and provide to services you request
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To facilitate your warranty or other services
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To confirm and track your order
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>To facilitate returns</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To detect and prevent fraud and other abuse
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Who We May Share Your Data With
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Payment service providers</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Shipping providers</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Fraud and security service providers
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Consequences Of Not Providing Data
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                You will not be able to make a purchase
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                You will not have access to our warranty or other services
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                You will not be able to return a products
              </p>
            </li>
          </ul>
          <h2 id="navigateheadingseven" >
            <a ></a>When You Contact M3D customer service via Phone,
            E-Mail, Chat, or in Person
          </h2>
          <h3>
            <a id="pp_two"></a>Categories Of Data We May Collect
          </h3>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your full name</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your phone number</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your e-mail address</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your physical address</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your payment information</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Recordings of your calls</p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>How We May Use The Data Collected
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>To help you complete an order</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To respond to your comments, inquiries, and requests
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>To facilitate returns</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To improve our customer experience
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Who We May Share Your Data With
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Our telecommunications and call recording service providers
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Consequences Of Not Providing Data
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                You will not be able to communicate with our Customer Service
                team
              </p>
            </li>
          </ul>
          <h2 id="navigateheadingfour" >
            <a id="pp_five"></a>When You Submit Information for Marketing
            Purposes
          </h2>
          <h3>
            <a id="pp_two"></a>Categories Of Data We May Collect
          </h3>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your full name</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your e-mail address</p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>How We May Use The Data Collected
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To provide you with information and offers relevant to you
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Who We May Share Your Data With
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Our marketing service providers
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Consequences Of Not Providing Data
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                You will not receive updates from M3D
              </p>
            </li>
          </ul>
          <h2 id="navigateheadingfive" >
            <a id="pp_five"></a>When You Review a Product
          </h2>
          <h3>
            <a id="pp_two"></a>Categories Of Data We May Collect
          </h3>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your full name</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your e-mail address</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Your review of our product and any pictures you submit
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>How We May Use The Data Collected
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To provide other customers with reviews of our products
              </p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To provide and improve our services and product offerings, and
                develop new ones
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Who We May Share Your Data With
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                Our product review service providers
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Consequences Of Not Providing Data
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                You will not be able to post a review of M3D products
              </p>
            </li>
          </ul>
          <h2 id="navigateheadingsixth" >
            <a id="pp_five"></a>When You Interact with Us via Social Media
          </h2>
          <h3>
            <a id="pp_two"></a>Categories Of Data We May Collect
          </h3>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your name</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>Your social media username</p>
            </li>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                The content of your social media post
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>How We May Use The Data Collected
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                To provide you with information and offers relevant to you
              </p>
            </li>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                To respond to your comments, inquiries, and requests
              </p>
            </li>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                To help administer and fulfill our contests and other promotions
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Who We May Share Your Data With
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                The social media platform on which you interact with M3D
              </p>
            </li>
          </ul>
          <h2>
            <a id="pp_five"></a>Consequences Of Not Providing Data
          </h2>
          <ul>
            <li>
              {" "}
              <p style={{ color: "#6f6f6f" }}>
                You will not be able to interact with M3D on social media
              </p>
            </li>
          </ul>
          <p style={{ color: "#6f6f6f" }}>
            We may also combine the information you provide to us over time and
            we may combine such information with information that is publicly
            available, collected through cookies and other technologies, and
            information that we receive from our partners, affiliates and other
            third parties. We may use that combined information to better
            provide you the Services and to better provide you personalized
            content, customized content and advertising.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            We value your comments, feedback, testimonials, etc., which help us
            improve our services and products. By making such submissions to us,
            you assign your rights in the submissions to us as described in the 
            <Link href={""}>&quot;Submissions&quot;</Link> section of our Terms
            and Conditions page.
          </p>
          <h1>Tracking Technology</h1>
          <p style={{ color: "#6f6f6f" }}>
            We may use, or permit our business partners to use, the following
            tracking technologies for the purposes described below:
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Cookies: A cookie is a small file that resides on your computer,
            mobile phone, or other device, and allows us or our business
            partners to recognize your device when you return to our Site and
            record information about your usage of our Site.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            We use cookies for five general purposes as follows:
          </p>
          <p style={{ color: "#6f6f6f" }}>
            1. Essential Operational: Cookies are necessary to allow us to
            operate our Services. For example, they are required to help you
            access secure areas (such as your account pages) and to use features
            like our shopping basket.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            2. Performance and Functionality: Cookies help us enhance the
            performance and functionality of our Services. For example, cookies
            help us identify you or your device when you come back to our
            Service so that you do not have to login to see your shopping
            basket.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            3. Analytics, Customization and Security: We use analytics and
            customization cookies, including third party cookies, to gather
            information on how our Services are being used by our visitors and
            to measure how popular our marketing campaigns are. We use the data
            we get to help customize our Services for you and make the content
            you see as relevant as possible. We also use the data we collect to
            help identify and prevent fraud, and to track visits from our
            affiliates or partners.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            4. Targeting/advertising: Cookies help us to customize and regulate
            (e.g., by capping the frequency of) the advertisements you receive,
            provide you with tailored offers, and measure the effectiveness of
            our advertising. For instance, if we target an ad campaign through
            an online advertising network, we might use cookies on our Site to
            estimate how many viewers of the ad later visited our Site – and
            therefore, how effective the ad campaign was. Or, we might
            “retarget” visitors to our Site by providing them offers (whether
            through online display media, email or direct mail) similar to those
            they viewed or expressed interest in during their Site visits. See
            the section below titled Interest Based Advertising for more
            information.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            5. Social networking cookies: Cookies allow visitors to share our
            pages and content through third-party social networking websites.
          </p>
          <br></br>
          <p style={{ color: "#6f6f6f" }}>
            Website and mobile application log files: We may make use of log
            files created automatically with access and use of our Services for
            analytics purposes.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Tracking Images: We may use tracking images (such as GIFs), which
            are small image files that we embed into our e-mails, to learn
            whether you opened or forwarded the e-mail or clicked on any of the
            content. This information tells us about our e-mail’s effectiveness
            and helps us ensure that we’re delivering information that you find
            interesting.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Local Storage: We use local storage (such as HTML5 or Flash) to
            provide you a rich web experience and to provide you with relevant
            content and advertising.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Other technologies: We may make use of other tracking technologies
            similar to the ones described above for similar purposes described
            above.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Interest Based Advertising: Third parties may use cookies and other
            technologies to collect information about your online activities
            over time and across different websites, including our Site. Third
            parties we work with may also use other “device-graphing”
            information in order to make inferences and connections about our
            customers and potential customers across various devices – such as
            mobile phones, tablets and browsers. (These companies may, for
            instance, make inferences that devices seen at a common IP address
            are used by common users.) Companies that we share information with
            may use the information we provide to them, often in combination
            with their existing information, to provide you with more relevant
            advertising tailored to your interests. We also may obtain
            information for this purpose from third-party websites on which our
            ads are served. The information our ad networks may collect on our
            behalf includes data about your visits to websites that serve M3D
            advertisements, such as the pages or advertisements you view and the
            actions you take on the websites. This data collection takes place
            both on our websites and on third-party websites that participate in
            these ad networks.
          </p>
          <br></br>
          <h2>Information That We May Share With Others</h2>
          <p style={{ color: "#6f6f6f" }}>
            Along with the sharing described above, we may share your
            information, including personal information, with others as follows:
          </p>
          <p style={{ color: "#6f6f6f" }}>
            M3D entities: We may share your personal information with our
            affiliated entities, e.g., any corporate subsidiaries or affiliates.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Service Providers: We may use third-party service providers to
            perform certain services on our behalf, including: shipping, payment
            processing, billing and collections, data storage/management,
            webhosting, fulfillment, assembly, marketing and data enhancement,
            mailing, and emailing as well as various customer, tech and
            operational support.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Special Events: If you choose to participate in a special event (for
            example, a promotion, contest, or sweepstakes), M3D may share your
            information with those organizations participating in the applicable
            event.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Compliance with Law and Fraud Protection: We may disclose your
            information: (1) when we believe in good faith that it is necessary
            to comply with any applicable law, regulation, legal process, or
            governmental request, such as lawful requests by public authorities,
            including to meet national security or law enforcement requirements;
            (2) in order to investigate, prevent or take action regarding
            potential illegal activities, suspected fraud, situations involving
            potential threats to the physical safety of any person or situations
            involving potential violations of our Terms and Conditions or other
            policies; (3) to other companies and organizations for fraud
            protection and risk reduction; and (4) to enforce any agreement we
            have with you.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Business Transfer: Your information may be disclosed as part of any
            merger, sale of company assets or acquisition, as well as in the
            event of an insolvency, bankruptcy or receivership (or in due
            diligence leading up to any acquisition), in which case information
            would be transferred as one of the business assets of the Company.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Aggregate Information: We may, and we may authorize third parties
            to, create aggregate records from personal information by excluding
            information that makes the information identifiable. We may use and
            disclose, and authorize third parties to use and disclose, aggregate
            non-personal information at our discretion.
          </p>
          <br></br>
          <h2> Children Under 13 </h2>
          <p style={{ color: "#6f6f6f" }}>
            M3D does not knowingly collect personal information from children
            under the age of 13. If we learn that we have collected personal
            information from a child under the age of 13, we will delete that
            data from our systems. Please visit the FTC&#39;s website at 
            <Link href="https://www.ftc.gov">https://www.ftc.gov</Link> for tips
            on protecting children&#39;s privacy online.
          </p>
          <br></br>
          <h2>Links</h2>
          <p style={{ color: "#6f6f6f" }}>
            Our Site may provide links to third-party websites which are outside
            our control and not covered by this Privacy Policy. We encourage you
            to review the privacy policies posted on these (and all) websites.
          </p>
          <h2>Security</h2>
          <p style={{ color: "#6f6f6f" }}>
            We utilize a combination of physical and electronic security
            technologies, procedures, and organizational measures to help
            protect your personal information from unauthorized access, use or
            disclosure. While we strive to safeguard your personal information,
            we cannot guarantee or warrant the security of any information you
            disclose or transmit to us.
          </p>
          <h2>Accessing And Updating Your Information</h2>
          <p style={{ color: "#6f6f6f" }}>
            If you have created a M3D account you can review and change certain
            personal information relating to your M3D account at any time by
            logging on to your account. Otherwise, to learn more, please contact
            us as set forth below.
          </p>
          <h2>Marketing Choice/Opt-Out</h2>
          <p style={{ color: "#6f6f6f" }}>
            Where permitted by applicable law, we want to communicate with you
            on our marketing initiatives, but only if you want to continue to
            hear from us.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            E-mail promotions: To opt out of receiving e-mail promotions that we
            send you: (1) select &quot;unsubscribe&quot; on our subscription
            status page and enter the requested information or follow the
            unsubscribe instructions in any of our promotional emails; or (2)
            write to Legal Department at 812 Avis Dr, Ann Arbor MI 48108 (a
            &quot;postal request&quot;). To opt out of telephone promotions, you
            can tell us when we call you or you can send us a postal request. To
            opt out of postal mail promotions, please send us a postal request.
            Opting out of communication with us does not affect our
            communications with you via telephone or email related to your
            orders with us or other transactional emails. Cookies and Tracking
            Technologies: You are always free to decline cookies if your browser
            permits; although, by declining the use of cookies you may not be
            able to use certain features on, and significant portions of, our
            Site. Also, because information we obtain may be combined, we may
            still be able to identify your web browser, computer or mobile
            device when you access our Services even if you disable cookies.
            Some browsers incorporate a “Do Not Track” (DNT) feature that, when
            turned on, signals to websites and online services that you do not
            wish to be tracked. Because there is not yet an accepted standard
            for how to respond to browser DNT signals, we do not currently
            respond to them. For more information about the use of cookies and
            how to block them, visit 
            <Link href="www.allaboutcookies.org">www.allaboutcookies.org</Link>
            , 
            <br></br>
            <Link href="www.youronlinechoices.eu">
              www.youronlinechoices.eu
            </Link>
             (Europe) or 
            <Link href="www.aboutads.info/choices">
              www.aboutads.info/choices
            </Link>
             (United States).
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Interest Based Advertising: You may opt out of receiving
            personalized advertisements from advertising companies that are
            members of the Network Advertising Initiative or who subscribe to
            the Digital Advertising Alliance’s Self-Regulatory Principles for
            Online Behavioral Advertising by visiting 
            <br></br>
            <Link
              style={{ fontSize: "13px" }}
              href="http://www.networkadvertising.org/choices"
            >
              http://www.networkadvertising.org/choices
            </Link>
            <br></br>
             and 
            <Link style={{ fontSize: "13px" }} href="www.aboutads.info/choices">
              www.aboutads.info/choices
            </Link>
            . Where required by law, we obtain your prior opt-in consent at the
            time of data collection for the processing of (i) personal
            information for marketing purposes and (ii) personal information
            deemed sensitive pursuant to applicable law.
          </p>
          <br></br>
          <h2>Your California Privacy Rights</h2>
          <p style={{ color: "#6f6f6f" }}>
            If you are a California resident you have the following rights under
            the California Consumer Privacy Act:
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Right to Know. You have the right to know and see what data we have
            collected about you over the past 12 months, including:
          </p>
          <ul>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                The categories of personal information we have collected about
                you;
              </p>
            </li>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                The categories of sources from which the personal information is
                collected;
              </p>
            </li>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                The business or commercial purpose for collecting your personal
                information;
              </p>
            </li>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                The categories of third parties with whom we have shared your
                personal information; and
              </p>
            </li>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                The specific pieces of personal information we have collected
                about you.
              </p>
            </li>
          </ul>
          <p style={{ color: "#6f6f6f" }}>
            Right to Delete. You have the right to request that we delete the
            personal information we have collected from you (and direct our
            service providers to do the same). Other Rights. You can request
            certain information about our disclosure of personal information to
            third parties for their own direct marketing purposes during the
            preceding calendar year. This request is free and may be made once a
            year. You also have the right not to be discriminated against for
            exercising any of the rights listed above.<br></br>Certain
            information may be exempt from such requests under applicable law.
            For example, we need certain types of information so that we can
            provide the Services to you. If you ask us to delete it, you may no
            longer be able to access or use the Services.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            To exercise your rights under the California Consumer Privacy Act,
            please contact us by either sending us an 
            <Link href="#">e-mail</Link>, or by phone at 
            <Link href="#">1-734-215-5449</Link>. Please provide your full name
            and e-mail address so that we may respond to your request as quickly
            as possible. You will be required to verify your identify before we
            fulfill your request. To do so, you will need to provide us with
            certain account information, such as your full name and email
            address. You can also designate an authorized agent to make a
            request on your behalf. To do so, you must provide us with written
            authorization for the agent to act on your behalf. You will still
            need to verify your identity directly with us.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            California law requires certain disclosures about Personal
            Information we ‘sell,’ which for the purposes of the California
            Consumer Privacy Act (CCPA), means making personal information
            available to third parties in exchange for valuable consideration,
            which some may claim includes allowing advertising companies to
            collect unique cookie IDs through our sites when you use our
            Services. Under that interpretation, we ‘sell’ personal information
            to advertise our products to you. In the preceding 12 months, we
            have ‘sold’ the following categories of personal information to the
            following categories of third parties:
          </p>
          <h2>Categories:</h2>
          <ul>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                The specific pieces of personal information we have collected
                about you.
              </p>
            </li>
          </ul>
          <h2>Third Parties:</h2>
          <ul>
            <li>
              <p style={{ color: "#6f6f6f" }}>
                Interested based advertising partners.
              </p>
            </li>
          </ul>
          <p style={{ color: "#6f6f6f" }}>
            For more information about Interest Based Advertisers, please see
            the Interest Based Advertising section above.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            You have the right to opt out of these sales at any time by visiting
            our <Link href="#">Do Not Sell My Personal Information</Link> page.
            We do not knowingly ‘sell’ personal information about consumers
            under the age of 16.
          </p>
          <h2>
            Data Protection For Individuals Based In The European Economic Area
            And Switzerland
          </h2>
          <p style={{ color: "#6f6f6f" }}>
            If you are a customer or website visitor in the European Economic
            Area (“EEA”) or Switzerland, the following, additional information
            is relevant to you. (Please do not rely on the below if you are not
            located in an EEA nation or Switzerland.):
          </p>
          <p style={{ color: "#6f6f6f" }}>
            M3D, Inc., having its registered address at 812 Avis Dr, Ann Arbor
            MI 48108, United States, is the data controller of your personal
            information for purposes of the EU General data Protection
            Regulation (“GDPR”). All customer orders are processed exclusively
            by M3D, Inc.<br></br>
            We only process your personal information if you have consented to
            such processing or, to the extent that it is necessary (i) for the
            performance of your agreement with us or in order to take steps at
            your request prior to entering into an agreement with us; (ii) to
            comply with our legal obligations; or (iii) for the purpose of our
            legitimate interests, including operating, evaluating and improving
            our global business. As required under the GDPR, we have carefully
            balanced our legitimate business interests against your data
            protection rights. For companies like M3D, Inc. that have global
            business operations, processing customer’s personal information for
            internal administrative purposes customer relations or direct
            marketing is typically also considered a legitimate interest under
            the GDPR.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Your personal information will be hosted in and managed from the
            United States, where M3D, Inc. is based. The law in the United
            States may not offer the same level of privacy and data protection
            as the law in your home country. We will rely on M3D’s need of your
            personal information for the performance of our contract with you
            for this transfer to the United States. When your personal
            information is transferred to (or accessed from) other countries
            outside the EEA for which the European Commission has not issued an
            adequacy decision, we will implement appropriate safeguards to
            ensure that your personal information remains protected. This may
            include data transfer agreements, a copy of which you can obtain by
            contacting us as indicated in the “How To Contact Us” section below.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            In general we will store your personal information as long as the
            information is necessary to fulfil the purposes for which we
            collected it (as explained in the “Use of Your Personal Information”
            section). We are committed to being our customers’ jeweler for life.
            If you become a customer of M3D, Inc., you may be eligible for many
            lifetime benefits, including, but not limited to: our lifetime
            diamond upgrade program, our lifetime product warranty, and lifetime
            repairs, cleaning, and resizing of jewelry. If you decide to take
            advantage of these benefits, we will keep your information until you
            (or your next of kin) ask us to remove your personal information
            from our records. Once your personal information has been removed
            from our records, it will not be possible to warranty, upgrade,
            clean, repair, or resize any product that you have purchased with
            us.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            You have the right to request access to the personal information
            that we process about you, to have your personal information
            corrected or erased, to restrict the processing of your personal
            information, as well as the right to data portability (certain of
            these rights are subject to our obligation to verify your identify).
            To exercise these rights, you should submit a written request using
            the contact details set out below. If you are not satisfied with the
            way we handle your request, you can lodge a complaint with the
            supervisory authority in your home country.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            Where we have obtained your consent for the processing of your
            personal information, you have the right to withdraw your consent at
            any time. Use these links to withdraw your 
            <Link href="#">consent to e-mail marketing</Link> or your 
            <Link href="#">consent to the use of cookies.</Link> This will not
            affect the lawfulness of the processing that has happened based on
            your consent prior to the withdrawal.
          </p>
          <p style={{ color: "#6f6f6f" }}>
            You also have the right to object, at any time, to the processing of
            your personal information which is based on M3D, Inc.’s legitimate
            interests, provided that we may retain your personal information for
            certain compelling purposes such as legal, auditing, accounting and
            billing purposes. Where we process your personal information for
            direct marketing purposes, you have the right to object at any time
            to such processing, including for profiling purposes to the extent
            that it is related to direct marketing. If you object to processing
            for direct marketing purposes, we will no longer process your
            personal information for such purposes.
          </p>
          <h2>How To Contact Us</h2>
          <p style={{ color: "#6f6f6f" }}>
            If you have any questions or wish to register a complaint in
            relation to this Privacy Policy or the manner in which your personal
            information is used by us, please contact us by any of the following
            means:
          </p>
          <p style={{ color: "#6f6f6f" }}>
            By Telephone: <Link href="#">734-215-5449 </Link>
            <br></br>By Email: <Link href="#">info@m3dimaging.com</Link>
          </p>
             
          <p style={{ color: "#6f6f6f" }}>
            By Post: M3D, Inc.<br></br>
            Legal Department.<br></br>
            812 Avis Dr, Ann Arbor MI 48108<br></br>
            United States of America
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PrivacyPolicyPage;
