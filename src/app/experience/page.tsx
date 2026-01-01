'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SocialIcons from '@/components/SocialIcons'
import DeveloperBackground from '@/components/DeveloperBackground'
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaCertificate } from 'react-icons/fa'

export default function ExperiencePage() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'OMX DIGITAL Pvt Ltd.',
      location: 'Siliguri, West Bengal, India',
      period: 'September 2024 - Present',
      description: 'Assisted in the development, testing, and deployment of software applications.',
      achievements: [
        'Worked on coding, debugging, and troubleshooting technical issues',
        'Collaborated with the development team to enhance existing software solutions',
        'Learned and applied new technologies as required for project execution',
      ],
      skills: ['Software Development', 'Debugging', 'Team Collaboration', 'Problem Solving'],
      type: 'Internship',
      icon: FaBriefcase,
    },
    {
      title: 'Graphic Designer',
      company: 'The Gift Shelf',
      location: 'Siliguri, West Bengal, India',
      period: 'January 2024 - September 2024',
      description: 'Crafted engaging, story-driven visuals for digital and print.',
      achievements: [
        'Created personalized product packaging designs',
        'Developed festive campaign visuals',
        'Brought creative ideas to life that connect emotionally with audiences',
      ],
      skills: ['Graphic Design', 'Visual Storytelling', 'Brand Identity', 'Campaign Design'],
      type: 'Full-time',
      icon: FaBriefcase,
    },
    {
      title: 'E-cell Innovation Head',
      company: 'Inhub Entrepreneurship Cell',
      location: 'Himachal Vihar, Siliguri',
      period: 'July 2024 - Present',
      description: 'Actively contributed to cultivating an entrepreneurial ecosystem on campus by leading innovative initiatives.',
      achievements: [
        'Coordinated and participated in Tech Startup Weekend and National Entrepreneurship Challenge 2024',
        'Attended E-Summit 2024, gaining exposure to industry leaders',
        'Mentored peers and guided innovation-driven activities',
        'Fostered collaboration across teams',
      ],
      skills: ['Leadership', 'Event Management', 'Mentoring', 'Strategic Thinking', 'Innovation'],
      type: 'Part-time',
      icon: FaBriefcase,
    },
    {
      title: 'Placement Chair',
      company: 'Inspiria Knowledge Campus',
      location: 'Siliguri, West Bengal, India',
      period: 'July 2024 - Present',
      description: 'Responsible for coordinating placement activities and connecting with recruiters.',
      achievements: [
        'Organized training sessions for job preparation',
        'Conducted resume reviews and mock interviews',
        'Connected students with recruiters and opportunities',
        'Provided career guidance and support',
      ],
      skills: ['Career Counseling', 'Event Coordination', 'Networking', 'Training'],
      type: 'Part-time',
      icon: FaBriefcase,
    },
    {
      title: 'Student Facilitator',
      company: 'Inspiria Knowledge Campus',
      location: 'Remote',
      period: 'July 2024 - December 2024',
      description: 'Mentored juniors by providing guidance in both academic pursuits and extracurricular activities.',
      achievements: [
        'Provided academic support and shared resources',
        'Motivated students to achieve their goals',
        'Encouraged active participation in co-curricular activities',
        'Created a supportive learning environment',
      ],
      skills: ['Mentoring', 'Communication', 'Problem Solving', 'Leadership'],
      type: 'Part-time',
      icon: FaBriefcase,
    },
    {
      title: 'Integral Member',
      company: 'Inskills Team',
      location: 'Remote',
      period: 'July 2023 - June 2024',
      description: 'Active member organizing and hosting events that enhance students\' skills and campus engagement.',
      achievements: [
        'Conceptualized and executed "First Impression" and "First Impact" programs',
        'Focused on improving communication, presentation, and personality development',
        'Contributed to planning and execution of student-centric events',
      ],
      skills: ['Event Management', 'Teamwork', 'Communication', 'Leadership'],
      type: 'Part-time',
      icon: FaBriefcase,
    },
    {
      title: 'Member',
      company: 'Computing Club',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Actively contributed to organizing and hosting several technical and gaming events.',
      achievements: [
        'Co-organized "Data Viz: Cricket Crunch Edition" and "BGMI-2025"',
        'Served as event host for multiple tournaments',
        'Hosted Free Fire tournament at Insvegarna',
        'Managed large-scale competitive events',
      ],
      skills: ['Event Management', 'Public Speaking', 'Team Leadership', 'Gaming Events'],
      type: 'Part-time',
      icon: FaBriefcase,
    },
  ]

  const certifications = [
    {
      title: 'Python Course for Beginners With Certification: Mastering the Essentials',
      issuer: 'Udemy',
      issueDate: 'November 2024',
      credentialId: '',
      credentialUrl: '',
      description: 'Mastered Python fundamentals including data types, control structures, functions, file handling, exception handling, OOP basics, and data structures.',
      icon: FaCertificate,
    },
    {
      title: 'Python Fundamentals for Beginners',
      issuer: 'Great Learning',
      issueDate: 'October 2024',
      credentialId: '',
      credentialUrl: '',
      description: 'Learned Python programming fundamentals and problem-solving techniques.',
      icon: FaCertificate,
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'Great Learning',
      issueDate: 'September 2024',
      credentialId: '',
      credentialUrl: '',
      description: 'Comprehensive course covering AI fundamentals, data science, deep learning, neural networks, supervised & unsupervised learning, and machine learning fundamentals.',
      icon: FaCertificate,
    },
    {
      title: 'Git, GitHub & Markdown Crash Course: Learn Git, GitHub & MD',
      issuer: 'Udemy',
      issueDate: 'August 2024',
      credentialId: 'UC-af1a808d-237a-4d80-870d-ed77930d9f79',
      credentialUrl: '',
      description: 'Learned version control with Git and GitHub, along with Markdown documentation.',
      icon: FaCertificate,
    },
    {
      title: 'Learn Canva for Advance Graphics Design',
      issuer: 'Udemy',
      issueDate: 'August 2024',
      credentialId: 'UC-e888b7f2-9f17-4f9d-809a-909e0b3f5fbd',
      credentialUrl: '',
      description: 'Advanced graphics design course covering Canva, design thinking, theme development, image design, graphic design, and creative strategy.',
      icon: FaCertificate,
    },
    {
      title: 'HTML & CSS - Certification Course for Beginners',
      issuer: 'Udemy',
      issueDate: 'March 2024',
      credentialId: 'UC-8c717488-17ab-49d7-a0ac-9d049b7d7d85',
      credentialUrl: '',
      description: 'Complete course covering HTML5, CSS3, style sheets, and Bootstrap framework.',
      icon: FaCertificate,
    },
    {
      title: 'e-Yantra Online Course on Innovation and Entrepreneurship',
      issuer: 'Indian Institute of Technology, Bombay',
      issueDate: 'January 2023',
      credentialId: '',
      credentialUrl: '',
      description: 'Comprehensive course on innovation and entrepreneurship covering stakeholder mapping, problem identification, user persona development, product design, MVP, business model analysis, and strategic thinking.',
      icon: FaCertificate,
    },
    {
      title: 'Youth Leadership Training Against Harmful Practices',
      issuer: 'UNICEF',
      issueDate: 'November 2023',
      credentialId: '',
      credentialUrl: '',
      description: 'Training program focused on social awareness, critical thinking, communication, leadership, public speaking, project planning, and community engagement.',
      icon: FaCertificate,
    },
    {
      title: 'Letter of Acknowledgement',
      issuer: 'inskills',
      issueDate: 'May 2023',
      credentialId: '',
      credentialUrl: '',
      description: 'Acknowledgment for contributions in communication, classroom management, learner engagement, presentation, and leadership.',
      icon: FaCertificate,
    },
  ]

  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden relative">
      {/* Developer-themed Background */}
      <DeveloperBackground />

      <Navbar />
      
      <SocialIcons socialLinks={[
        { icon: FaGithub, href: 'https://github.com/tanmoy0205', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tanmoy-saha-developer/', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:dv.tanmoy.saha@gmail.com', label: 'Email' },
      ]} />
      
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 sm:mb-12 md:mb-16 text-center"
          >
            <span className="text-white">Work</span>
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h1>

          {/* Work Experience Timeline - Two Column Layout */}
          {experiences.length > 0 ? (
            <div className="relative mb-24 max-w-7xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-gray-700 to-gray-700 transform -translate-x-1/2 hidden lg:block"></div>

              <div className="space-y-12 lg:space-y-16">
                {experiences.map((exp, index) => {
                  const isLeft = index % 2 === 0
                  
                  // Card content JSX
                  const cardContent = (
                    <motion.div 
                      className="bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-accent-cyan/50 transition-all relative overflow-hidden group h-full"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header */}
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-accent-cyan text-sm sm:text-base font-semibold mb-1">{exp.company}</p>
                        <p className="text-gray-400 text-xs sm:text-sm mb-2">{exp.location} • {exp.type}</p>
                        <p className="text-gray-400 text-xs sm:text-sm bg-dark-200/50 px-2 sm:px-3 py-1 rounded-lg inline-block">{exp.period}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-400 text-xs sm:text-sm flex items-start">
                              <span className="text-accent-cyan mr-2 mt-1 flex-shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Skills/Tags */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-800/50">
                          {exp.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-0.5 sm:py-1 bg-dark-200/50 text-gray-400 rounded-md border border-gray-800/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: index * 0.15, duration: 0.8 }}
                      className="relative flex items-center"
                    >
                      {/* Left Column Card */}
                      {isLeft ? (
                        <>
                          <div className="w-full lg:w-[45%] lg:pr-8">
                            {cardContent}
                          </div>
                          {/* Timeline Dot - Center */}
                          <div className="hidden lg:flex flex-1 justify-center items-center relative z-10">
                            <motion.div 
                              className="w-4 h-4 bg-accent-cyan rounded-full border-4 border-dark-200 shadow-lg shadow-accent-cyan/50"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                            />
                          </div>
                          {/* Empty space for right */}
                          <div className="hidden lg:block w-[45%]"></div>
                        </>
                      ) : (
                        <>
                          {/* Empty space for left */}
                          <div className="hidden lg:block w-[45%]"></div>
                          {/* Timeline Dot - Center */}
                          <div className="hidden lg:flex flex-1 justify-center items-center relative z-10">
                            <motion.div 
                              className="w-4 h-4 bg-accent-cyan rounded-full border-4 border-dark-200 shadow-lg shadow-accent-cyan/50"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                            />
                          </div>
                          <div className="w-full lg:w-[45%] lg:pl-8">
                            {cardContent}
                          </div>
                        </>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 mb-24"
            >
              <p className="text-gray-400 text-lg">No work experience listed yet. Please add your experience from LinkedIn.</p>
            </motion.div>
          )}

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
            >
              <span className="text-white">Certifications</span>
            </motion.h2>

            {certifications.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                    className="relative group h-full"
                  >
                    {/* Main Card - Always Visible */}
                    <div className="bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-accent-cyan/50 transition-all cursor-pointer h-full flex flex-col relative overflow-hidden">
                      <motion.div
                        className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-accent-cyan"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                      >
                        <cert.icon />
                      </motion.div>
                      <motion.h3
                        className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        {cert.title}
                      </motion.h3>
                      <motion.p
                        className="text-accent-cyan text-xs sm:text-sm mb-2 font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                      >
                        {cert.issuer}
                      </motion.p>
                      <motion.p
                        className="text-gray-400 text-xs mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.5 }}
                      >
                        {cert.issueDate}
                      </motion.p>
                      <div className="mt-auto pt-3 sm:pt-4">
                        <span className="text-accent-cyan text-xs font-medium group-hover:underline">Hover for details →</span>
                      </div>
                    </div>

                    {/* Hover Overlay - Shows Details */}
                    <div
                      className="absolute inset-0 bg-dark-200/98 backdrop-blur-md border border-accent-cyan/50 rounded-2xl p-4 sm:p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-20 flex flex-col overflow-y-auto"
                      style={{ maxHeight: '100%' }}
                    >
                      <div className="text-gray-300 text-xs mb-3 space-y-1.5 flex-shrink-0">
                        {cert.issueDate && <p><span className="text-gray-400">Issued:</span> {cert.issueDate}</p>}
                        {cert.credentialId && (
                          <p className="break-all">
                            <span className="text-gray-400">Credential ID:</span>{' '}
                            <span className="font-mono text-xs break-all">{cert.credentialId}</span>
                          </p>
                        )}
                      </div>

                      {cert.description && (
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 flex-shrink-0">
                          {cert.description}
                        </p>
                      )}

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-cyan text-sm hover:underline mt-auto inline-block flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Credential →
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No certifications listed yet. Please add your certifications from LinkedIn.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
