import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Beneficial Lined Pelican</title>
        <meta property="og:title" content="Beneficial Lined Pelican" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact Us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Get in Touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              At AltaTech, we specialize in providing cutting-edge AI solutions
              to help businesses thrive in the digital age. Our team of experts
              is dedicated to delivering innovative and customized AI services
              tailored to your specific needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Empowering Your Business with AI Solutions
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Machine Learning</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Chatbots</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Predictive Analytics</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Leverage AI to enhance decision-making processes and improve
              efficiency.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Develop chatbots for enhanced customer engagement and support.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Implement predictive analytics to optimize business strategies.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get in Touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us today to discuss how our AI solutions can help you
              achieve your business goals.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to revolutionize your business with AI?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">AI Consulting</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Machine Learning</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Chatbots</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Expert consulting services to help businesses implement AI
              solutions tailored to their needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Cutting-edge machine learning algorithms to analyze data and make
              informed predictions.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Custom chatbot development for enhanced customer engagement and
              support.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Standard Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Premium Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$199/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$299/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$199/month</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">$999/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/month</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">$1999/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$399/month</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">$2999/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Upgrade Now</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">$1999/year</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Upgrade Now</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">$2999/year</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Upgrade Now</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">$3999/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">AI Consulting</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Machine Learning</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Chatbots</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">AI Consulting</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Machine Learning</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">Chatbots</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Predictive Analytics</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">AI Consulting</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Machine Learning</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Chatbots</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Predictive Analytics</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Automation</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Predictive Analytics</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Automation</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">24/7 Support</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Automation</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Custom Solutions</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Priority Support</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">+ Advanced Analytics Tools</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">+ Dedicated Account Manager</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">+ Training Workshops</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Consultation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Customized Solutions</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Implementation</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Optimization</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Schedule a consultation with our experts to discuss your AI needs
              and goals.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Receive personalized AI solutions tailored to your specific
              business requirements.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Efficiently implement the AI solutions into your existing systems
              with our support.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Continuously optimize and improve the AI technologies to enhance
              performance and results.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Working with AltaTech has been a game-changer for our business.
              Their AI solutions have significantly improved our efficiency and
              productivity.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              AltaTech&apos;s team is incredibly knowledgeable and dedicated.
              They helped us implement machine learning algorithms that have
              revolutionized our data analysis processes.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              I highly recommend AltaTech for anyone looking to incorporate
              chatbots into their customer service strategy. Their expertise in
              AI technology is unmatched.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              The predictive analytics solutions provided by AltaTech have given
              us valuable insights into consumer behavior, enabling us to make
              data-driven marketing decisions.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              See what our clients have to say about their experience working
              with AltaTech.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, Tech Solutions Inc.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">CTO, Data Innovations Co.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">COO, Future Enterprises Ltd.</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">
              Marketing Director, Digital Trends Corp.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">AI Consulting</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Machine Learning</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Chatbots</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Predictive Analytics</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Automation</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">/terms</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">/cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">/privacy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
