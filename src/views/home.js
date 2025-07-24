import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Activation Hero-new</title>
        <meta property="og:title" content="Activation Hero-new" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <Link to="/" className="home-navlink10">
          <img
            alt="logo"
            src="/New Folder/activation-hero-logo-200h.png"
            className="home-image10"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="home-desktop-menu1">
          <nav className="home-links">
            <Link to="/deactivation-support" className="home-navlink11">
              Deactivation Support
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
            <a
              href="https://news.activationhero.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              News
            </a>
            <a
              href="https://gigrocket.freshdesk.com/support/tickets/new"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              <span>Contact Us</span>
              <br></br>
            </a>
          </nav>
          <div className="home-container11">
            <Link to="/deactivation-support" className="home-navlink12">
              <div className="home-container12">
                <span className="home-text102">DEACTIVATION SUPPORT</span>
              </div>
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="/accidenthero1-1500h.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-container13">
              <Link to="/deactivation-support" className="home-navlink13">
                Deactivation Support
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </Link>
              <a
                href="https://news.activationhero.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                News
              </a>
              <a
                href="https://gigrocket.freshdesk.com/support/tickets/new"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                Contact Us
              </a>
            </div>
            <Link to="/deactivation-support" className="home-navlink14 button">
              DEACTIVATION SUPPORT
            </Link>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu2"></div>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu3"></div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-container14">
        <div className="home-container15">
          <div className="home-container16">
            <div className="home-container17">
              <img
                alt="image"
                src="/New Folder/65936099237f27f93f1163cb_image-removebg-preview%20(5)-200h.png"
                className="home-image11"
              />
              <span className="home-text103">
                <span>Protector of</span>
                <br></br>
                <span>Gig Workers</span>
              </span>
            </div>
          </div>
          <span className="home-text107">
            <span>
              Has your account been canceled or deactivated? Activation Hero can
              help drivers and gig workers get back on the road!
            </span>
            <br className="home-text109"></br>
          </span>
          <a
            href="https://letter.fillout.com/reactivation"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link14"
          >
            <div className="home-container18">
              <span className="home-text110">GET STARTED</span>
            </div>
          </a>
        </div>
        <img
          alt="image"
          src="/imgpsh_fullsize_anim%20(2)-1500w.png"
          className="home-image12"
        />
      </div>
      <div className="home-container19">
        <span className="home-text111">Were you unfairly deactivated?</span>
        <span className="home-text112">
          ActivationHero &amp; Letter Mechanic does all of the hard work for
          you. We take the information you provide, including your statement and
          any evidence you have, then draft and mail a professional letter to
          the gig company of your choice. We explain the situation, explain how
          you&apos;ve been wrongfully deactivated and urge the gig company take
          a look at your argument. Our method has worked for countless drivers,
          and while this isn&apos;t fully guaranteed, the ActivationHero team
          will do everything in their capability to work with every driver
          individually to try to get their account restored and earning again.
        </span>
        <a
          href="https://letter.fillout.com/reactivation"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link15"
        >
          <div className="home-container20">
            <span className="home-text113">GET STARTED</span>
          </div>
        </a>
      </div>
      <div className="home-container21">
        <div className="home-container22">
          <img
            alt="image"
            src="/octicongoal163711-uxng.svg"
            className="home-image13"
          />
          <span className="home-text114">
            So what does Activation Hero do for you?
          </span>
          <span className="home-text115">
            <span>
              ActivationHero &amp; Letter Mechanic does all of the hard 
            </span>
            <span>
              work for you. We take the information you provide, including 
            </span>
            <span>your statement and any evidence you have, then </span>
            <span>
              draft and mail a professional letter to the gig company 
            </span>
            <span>of your choice. We explain the situation, explain how </span>
            <span>
              you&apos;ve been wrongfully deactivated and urge the gig 
            </span>
            <span>company take a look at your argument. Our method </span>
            <span>
              has worked for countless drivers, and while this isn&apos;t 
            </span>
            <span>fully guaranteed, the ActivationHero team will do</span>
            <br></br>
            <span>
              everything in their capability to work with every driver
            </span>
            <br></br>
            <span>individually to try to get their account restored and</span>
            <br></br>
            <span>earning again.</span>
          </span>
        </div>
        <div className="home-container23">
          <img
            alt="image"
            src="/imgpsh_fullsize_anim%20(1)-1500w.png"
            className="home-image14"
          />
        </div>
      </div>
      <div className="home-container24">
        <span className="home-text131">BEST SELLER</span>
        <span className="home-text132">
          <span>Uber Deactivation Help</span>
          <br className="home-text134"></br>
          <span>$69.00</span>
        </span>
        <span className="home-text136">
          Has your Uber account been canceled or deactivated? Activation Hero
          can help drivers and gig workers get back on the road!
        </span>
        <a
          href="https://letter.fillout.com/reactivation"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link16"
        >
          <div className="home-container25">
            <span className="home-text137">GET STARTED</span>
          </div>
        </a>
      </div>
      <div className="home-container26">
        <div className="home-container27">
          <span className="home-text138">FEATURED PRODUCTS</span>
        </div>
        <div className="home-container28">
          <div className="home-container29">
            <img
              alt="image"
              src="/New Folder/1-removebg-preview-500h.png"
              className="home-image15"
            />
            <span className="home-text139">Uber Deactivation Support</span>
            <span className="home-text140">$69.00</span>
            <Link to="/uber" className="home-navlink15">
              <div className="home-container30">
                <span className="home-text141">GET STARTED</span>
              </div>
            </Link>
          </div>
          <div className="home-container31">
            <img
              alt="image"
              src="/New Folder/3-removebg-preview-500h.png"
              className="home-image16"
            />
            <span className="home-text142">
              <span>Airport Trip Deactivation</span>
              <br></br>
              <span>Support</span>
            </span>
            <span className="home-text146">$69.00</span>
            <Link to="/airport-trips" className="home-navlink16">
              <div className="home-container32">
                <span className="home-text147">GET STARTED</span>
              </div>
            </Link>
          </div>
          <div className="home-container33">
            <img
              alt="image"
              src="/New Folder/5-removebg-preview-500h.png"
              className="home-image17"
            />
            <span className="home-text148">Lyft</span>
            <span className="home-text149">$69.00</span>
            <Link to="/lyft" className="home-navlink17">
              <div className="home-container34">
                <span className="home-text150">GET STARTED</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="home-container35">
          <div className="home-container36">
            <img
              alt="image"
              src="/New Folder/2-removebg-preview-500h.png"
              className="home-image18"
            />
            <span className="home-text151">
              <span>DoorDash Deactivation</span>
              <br></br>
              <span>Support</span>
            </span>
            <span className="home-text155">$69.00</span>
            <Link to="/door-dash" className="home-navlink18">
              <div className="home-container37">
                <span className="home-text156">GET STARTED</span>
              </div>
            </Link>
          </div>
          <div className="home-container38">
            <img
              alt="image"
              src="/New Folder/grubhub-deactivation-support_thumbnail-removebg-preview-500h.png"
              className="home-image19"
            />
            <span className="home-text157">
              <span>GrubHub Deactivation</span>
              <br></br>
              <span>Support</span>
            </span>
            <span className="home-text161">$69.00</span>
            <Link to="/grub-hub" className="home-navlink19">
              <div className="home-container39">
                <span className="home-text162">GET STARTED</span>
              </div>
            </Link>
          </div>
          <div className="home-container40">
            <img
              alt="image"
              src="/New Folder/4-removebg-preview-500h.png"
              className="home-image20"
            />
            <span className="home-text163">
              Amazon Flex Deactivation Support
            </span>
            <span className="home-text164">$69.00</span>
            <Link to="/amazon-flex" className="home-navlink20">
              <div className="home-container41">
                <span className="home-text165">GET STARTED</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-container42">
        <img
          alt="image"
          src="/imgpsh_fullsize_anim%20(3)-600h.png"
          className="home-image21"
        />
        <div className="home-container43">
          <span className="home-text166">SHIELD OF JUSTICE</span>
          <span className="home-text167">
            Activation Hero isn&apos;t alone! Teaming up with Shield of Justice,
            they provide comprehensive assistance. Shield of Justice is a
            seasoned paralegal specializing in helping individuals worldwide
            prepare for small claims court. She&apos;ll assist in drafting your
            letter, and her dedicated team of customer support agents will be on
            hand to answer any questions along the way. If your letter
            doesn&apos;t elicit a response from the offending company, you can
            schedule a free 20-minute phone consultation with her to discuss
            small claims filing.
          </span>
          <a
            href="https://gigrocket.freshdesk.com/support/tickets/new"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link17"
          >
            <div className="home-container44">
              <span className="home-text168">GET STARTED</span>
            </div>
          </a>
        </div>
      </div>
      <div className="home-container45">
        <iframe
          src="https://www.youtube.com/embed/eQTNCl5mRJI?si=jGBHHvtJAqpQdQWa"
          allow="accelerometer, autoplay"
          allowFullScreen="true"
          className="home-iframe"
        ></iframe>
        <div className="home-container46">
          <img
            alt="image"
            src="/octicongoal163711-uxng.svg"
            className="home-image22"
          />
          <span className="home-text169">
            How does Activation Hero work for you?
          </span>
          <span className="home-text170">
            ActivationHero &amp; Letter Mechanic does all of the hard work for
            you. We take the information you provide, including your statement
            and any evidence you have, then draft and mail a professional letter
            to the gig company of your choice. We explain the situation, explain
            how you&apos;ve been wrongfully deactivated and urge the gig company
            take a look at your argument. Our method has worked for countless
            drivers, and while this isn&apos;t fully guaranteed, the
            ActivationHero team will do everything in their capability to work
            with every driver individually to try to get their account restored
            and earning again.
          </span>
        </div>
      </div>
      <div className="home-container47">
        <span className="home-text171">WHAT DRIVERS LIKE YOU ARE SAYING</span>
        <div className="home-container48">
          <div className="home-container49">
            <span className="home-text172">
              I’m back online and making $ Thank you so much for your help... I
              couldn’t have done it without you!
            </span>
            <span>— Alesandro J.</span>
          </div>
          <div className="home-container50">
            <span className="home-text174">
              If you are deactivated don&apos;t be hesitant... truly worth it. I
              was deactivated and they said it was final and this man got me my
              account back. Thanks for getting my life back on track!
            </span>
            <span>— @mkz107</span>
          </div>
          <div className="home-container51">
            <span className="home-text176">
              We are truly blessed to have a professional like you that
              understands firsthand how to deal with these types of situations
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://news.activationhero.com/p/the-destin-driver.html"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link18"
            >
              <span>(</span>
              <span className="home-text178">read full testimonial</span>
              <span>)</span>
            </a>
            <span>— Destin the Driver</span>
          </div>
        </div>
      </div>
      <div className="home-container52">
        <div className="home-container53">
          <div className="home-container54">
            <img
              alt="image"
              src="/New Folder/imgpsh_fullsize_anim%20(10)-600h.png"
              className="home-image23"
            />
          </div>
          <span className="home-text181">
            Relentlessly advocating for Gig Worker rights, Activation Hero
            assists drivers and gig workers who have been wrongfully deactivated
            to get back on the road!
          </span>
          <span className="home-text182">
            <span>Activation Hero</span>
            <br></br>
          </span>
          <span className="home-text185">
            <span>Protector of Gig Workers</span>
            <br></br>
          </span>
        </div>
        <div className="home-container55">
          <div className="home-container56">
            <img
              alt="image"
              src="/New Folder/imgpsh_fullsize_anim%20(17)-600h.png"
              className="home-image24"
            />
          </div>
          <span className="home-text188">
            An international paralegal, specialized in wrongful termination
            cases, leads a team of dedicated customer support agents who are
            available to answer your questions throughout the process.
          </span>
          <span className="home-text189">Shield of Justice</span>
          <span className="home-text190">Professional Client Support</span>
        </div>
      </div>
      <div className="home-container57">
        <div className="home-container58">
          <div className="home-container59">
            <div className="home-container60">
              <div className="home-container61">
                <div className="home-container62">
                  <Link to="/" className="home-navlink21">
                    <img
                      alt="logo"
                      src="/New Folder/activation-hero-logo-200h.png"
                      className="home-image25"
                    />
                  </Link>
                  <span className="home-text191">Subscribe</span>
                  <div className="home-container63">
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      className="input"
                    />
                    <button type="button" className="home-button button">
                      <span>
                        <span>GO</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-container64">
                    <div className="home-container65">
                      <input type="radio" name="radio" />
                      <span className="home-text195">Subscribe</span>
                    </div>
                    <div className="home-container66">
                      <input type="radio" name="radio" />
                      <span className="home-text196">Unsubscribe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container67">
              <span className="home-text197">Quick Links</span>
              <a
                href="https://news.activationhero.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link19"
              >
                Blog &amp; News
              </a>
              <a
                href="https://news.activationhero.com/p/free-strike-posters-for-gig-workers.html"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link20"
              >
                Free Strikes Posters
              </a>
              <a
                href="https://letterstatus.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link21"
              >
                Status
              </a>
              <a
                href="https://activation-hero-site.webflow.io/terms-and-conditions"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link22"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="https://news.activationhero.com/p/affiliate-program.html"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link23"
              >
                Become an Affiliate
              </a>
            </div>
          </div>
        </div>
        <span className="home-text198">
          <span className="home-text199">
            Disclaimer: Activation Hero is not a law firm and does not provide
            any legal services. In using this service, you have not retained a
            law firm to represent you in any capacity. Activation Hero will not
            take any action on your behalf other than preparing a letter and
            mailing said letter to the registered agent of the deactivating
            company. Activation Hero will not file any demands for arbitration,
            claims for damages, lawsuits, or other actions on your behalf.
            Should you wish to pursue legal action against any person or entity
            relating to your deactivation (or anything else), it is in your
            interest to contact an attorney in your state as soon as possible.
            There are strict deadlines for filing legal claims relating to
            wrongful termination, loss of employment opportunity, lost wages,
            breach of contract, defamation, injuries, and other matters. Those
            deadlines vary by state and claim. If you miss the deadline, you
            lose your right to file the claim and/or obtain money or other legal
            remedies. Activation Hero urges you to contact a law firm
            immediately should you wish to file any claim and/or lawsuit. After
            the purchased letter is sent, Activation Hero will not follow-up
            with the deactivating company in any capacity or for any reason.
            This is a one-time service, in which you make one payment to
            Activation Hero and, in return, Activation Hero sends a letter on
            your behalf. After the letter is mailed, Activation Hero has
            completed the task for which you paid. No other action will be taken
            on your behalf. Activation Hero will not issue any refunds in
            relation to this service. Activation Hero will not respond to a
            customer’s request for “status” on his/her reactivation, the
            response from the deactivating company, or anything else. Your USPS
            tracking number is your evidence that the company received the
            letter. If Activation Hero receives a written response from the
            deactivating company, Activation Hero will forward the response to
            the email address you provided when requesting the letter. I have
            read and accept the above terms. I understand there is no guarantee.
            I understand there is no refund once I submit my request.
          </span>
          <br className="home-text200"></br>
        </span>
        <div className="home-container68"></div>
        <span className="home-text201">
          Copyright 2024 Activation Hero. All Rights Reserved.
        </span>
        <img
          alt="image"
          src="/image281725-rl7m9-400h-400h-200w.png"
          className="home-image26"
        />
      </div>
    </div>
  )
}

export default Home
