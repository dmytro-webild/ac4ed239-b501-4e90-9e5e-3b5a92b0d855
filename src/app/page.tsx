"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Crown, Heart, Sparkles, Zap, CheckCircle, Shield, Zap as ZapIcon } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumLargeSizeLargeTitles"
      background="fluid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Join Now", href: "contact" }}
          brandName="Fortino Tinder"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Fortino Tinder"
          description="Find your perfect match with our modern swipe-based dating platform. Connect, chat, and meet people who share your interests."
          buttons={[
            { text: "Join Now", href: "contact" },
            { text: "Learn More", href: "features" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-couple-spend-time-summer-city_1157-20386.jpg"
          imageAlt="Fortino Tinder dating platform"
          showDimOverlay={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyThree
          features={[
            {
              id: "1",              title: "Swipe & Match",              tags: ["Interaction", "Real-time"],
              imageSrc: "http://img.b2bpic.net/free-vector/mobile-banking_24877-49204.jpg",              imageAlt: "Swipe card interaction"
            },
            {
              id: "2",              title: "Instant Match Notification",              tags: ["Celebration", "Engagement"],
              imageSrc: "http://img.b2bpic.net/free-vector/app-referring-friend-illustrated_52683-22211.jpg",              imageAlt: "Match notification"
            },
            {
              id: "3",              title: "Real-Time Chat",              tags: ["Messaging", "Instant"],
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-scanning-qr-code_23-2149303396.jpg",              imageAlt: "Real-time messaging"
            },
            {
              id: "4",              title: "Location-Based Matching",              tags: ["Proximity", "Smart"],
              imageSrc: "http://img.b2bpic.net/free-photo/young-couple-using-mobile-phone-while-enjoying-date-together-restaurant_58466-16033.jpg",              imageAlt: "Location matching"
            }
          ]}
          animationType="slide-up"
          title="Powerful Features for Modern Dating"
          description="Experience seamless swiping, real-time messaging, and smart matching powered by advanced algorithms."
          tag="Features"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Explore All Features", href: "contact" }]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Fortino Tinder"
          description="We're revolutionizing the way people meet and connect in the modern world."
          tag="Our Story"
          textboxLayout="default"
          useInvertedBackground={true}
          bulletPoints={[
            {
              title: "Smart Matching Algorithm",              description: "Our AI-powered matching engine connects people based on interests, location, and preferences for better compatibility.",              icon: CheckCircle
            },
            {
              title: "Secure & Private",              description: "Your privacy and security are our top priority with end-to-end encryption and verified user profiles.",              icon: Shield
            },
            {
              title: "Real-Time Connection",              description: "Instant messaging and notifications keep you connected with matches and ensure you never miss a conversation.",              icon: ZapIcon
            },
            {
              title: "Mobile-First Design",              description: "Optimized for all devices with a seamless experience whether you're on the go or at home.",              icon: CheckCircle
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/business-owner-exchanging-ideas-with-realtor-contractor-office-tour_482257-107518.jpg"
          imageAlt="Fortino Tinder team collaboration"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttons={[{ text: "Start Dating", href: "contact" }]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          plans={[
            {
              id: "basic",              badge: "Most Popular",              badgeIcon: Sparkles,
              price: "Free",              subtitle: "Start exploring today",              buttons: [{ text: "Get Started", href: "contact" }],
              features: [
                "Browse profiles",                "Swipe left or right",                "Basic profile setup",                "Limited messages per day",                "Standard matching"
              ]
            },
            {
              id: "premium",              badge: "Best Value",              badgeIcon: Crown,
              price: "$9.99/month",              subtitle: "Unlock premium features",              buttons: [{ text: "Upgrade Now", href: "contact" }],
              features: [
                "Unlimited swipes",                "Unlimited messages",                "See who likes you",                "Advanced filters",                "Priority support",                "Boost your profile"
              ]
            },
            {
              id: "vip",              badge: "Exclusive",              badgeIcon: Zap,
              price: "$19.99/month",              subtitle: "VIP dating experience",              buttons: [{ text: "Go VIP", href: "contact" }],
              features: [
                "Everything in Premium",                "Verified badge",                "Rewind matches",                "Travel mode",                "Video call feature",                "Personal matchmaker",                "Ad-free experience"
              ]
            }
          ]}
          animationType="slide-up"
          title="Flexible Plans for Everyone"
          description="Choose the perfect plan to match your dating goals. Upgrade anytime."
          tag="Pricing"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson, Marketing Manager",              date: "Date: 15 January 2025",              title: "Found my perfect match!",              quote: "I never expected to meet someone so amazing on a dating app. The matching algorithm worked perfectly, and we've been together for 6 months now. Thank you Fortino Tinder!",              tag: "Premium User",              avatarSrc: "http://img.b2bpic.net/free-photo/selfie-portrait-videocall_23-2149186124.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-posing-work-with-copy-space_23-2148826463.jpg?_wi=1"
            },
            {
              id: "2",              name: "Michael Chen, Software Engineer",              date: "Date: 20 December 2024",              title: "Best dating app experience",              quote: "The real-time messaging and smooth interface made connecting with matches effortless. The features are well-designed and actually useful. Highly recommend!",              tag: "VIP User",              avatarSrc: "http://img.b2bpic.net/free-vector/avatars-pack-boys-flat-design_23-2147573520.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-man-posing-camera-standing-park_1262-20437.jpg?_wi=1"
            },
            {
              id: "3",              name: "Emily Rodriguez, Designer",              date: "Date: 10 January 2025",              title: "Finally met someone genuine",              quote: "Fortino Tinder's verified profile system gave me confidence. The people I met were authentic, and I found a meaningful relationship. Best decision ever!",              tag: "Premium User",              avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-taking-selfie-photo-winking_1262-18343.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/self-portrait-cheerful-modern-couple-love_1262-12888.jpg"
            },
            {
              id: "4",              name: "David Kim, Product Manager",              date: "Date: 5 January 2025",              title: "Fantastic user experience",              quote: "The app is intuitive, fast, and fun. I love the swipe interface and how easy it is to connect with people nearby. This is the future of dating!",              tag: "Premium User",              avatarSrc: "http://img.b2bpic.net/free-vector/call-center-agent-avatar-collection-with-flat-design_23-2147954767.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion-male-posing-street-background-near-skyscrapers-sunglasses_158538-20763.jpg"
            },
            {
              id: "5",              name: "Jessica Martinez, HR Specialist",              date: "Date: 1 January 2025",              title: "Amazing matches and real connections",              quote: "The location-based matching is incredible. I met someone who shared all my interests within my area. The conversations felt natural and genuine. Highly satisfied!",              tag: "VIP User",              avatarSrc: "http://img.b2bpic.net/free-photo/selfie-portrait-videocall_23-2149186124.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-posing-work-with-copy-space_23-2148826463.jpg?_wi=2"
            },
            {
              id: "6",              name: "Robert Thompson, Entrepreneur",              date: "Date: 28 December 2024",              title: "Worth every penny",              quote: "I upgraded to premium and it was the best decision. Unlimited swipes, no ads, and amazing matches. The investment paid off quickly!",              tag: "VIP User",              avatarSrc: "http://img.b2bpic.net/free-vector/avatars-pack-boys-flat-design_23-2147573520.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-man-posing-camera-standing-park_1262-20437.jpg?_wi=2"
            }
          ]}
          title="Success Stories from Our Community"
          description="Real people finding real connections on Fortino Tinder."
          tag="Testimonials"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          faqs={[
            {
              id: "1",              title: "How do I create a profile?",              content: "Sign up with your email, add photos, write a bio, and set your preferences. Your profile will be verified within 24 hours to ensure a safe community."
            },
            {
              id: "2",              title: "How does the matching algorithm work?",              content: "Our AI analyzes your interests, location, age preference, and activity level to suggest compatible matches. The more you interact, the smarter our algorithm becomes."
            },
            {
              id: "3",              title: "Is Fortino Tinder safe and secure?",              content: "Yes! We use end-to-end encryption for all messages, verify user profiles, and have strict security protocols. Your privacy is our priority."
            },
            {
              id: "4",              title: "Can I change my subscription plan?",              content: "Absolutely! You can upgrade or downgrade your plan anytime. Changes take effect immediately, and we'll adjust billing accordingly."
            },
            {
              id: "5",              title: "What happens if I match with someone?",              content: "Both users get a notification and can start chatting immediately. You can share photos, emojis, and video call through our secure platform."
            },
            {
              id: "6",              title: "How do I delete my account?",              content: "Go to Settings > Account > Delete Account. Your data will be permanently removed within 30 days. You can reactivate your account anytime before then."
            }
          ]}
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about Fortino Tinder and how to get started."
          textPosition="left"
          useInvertedBackground={false}
          animationType="smooth"
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get Started"
          tagIcon={Heart}
          title="Ready to Find Your Perfect Match?"
          description="Join thousands of people already connecting on Fortino Tinder. Start swiping today and discover meaningful relationships."
          buttons={[
            { text: "Join Now", href: "contact" },
            { text: "Learn More", href: "features" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Fortino Tinder"
          copyrightText="© 2025 Fortino Tinder. All rights reserved."
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "#" },
                { label: "Testimonials", href: "testimonials" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Community Guidelines", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
