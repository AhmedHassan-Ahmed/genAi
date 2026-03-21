import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  Shield,
  Workflow,
  BarChart3,
  Globe,
  Sparkles,
  Cpu,
  Lock,
  LineChart,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Processing",
    description:
      "Advanced deep learning models that understand context, predict outcomes, and continuously improve through machine learning.",
    color: "from-purple-500 to-indigo-500",
    stats: "99.9% accuracy",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description:
      "Process millions of data points in milliseconds. Get instant insights and make data-driven decisions faster than ever.",
    color: "from-blue-500 to-cyan-500",
    stats: "<50ms latency",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC 2 compliance, and advanced threat detection keep your data safe and secure 24/7.",
    color: "from-emerald-500 to-teal-500",
    stats: "Zero breaches",
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    description:
      "Automate repetitive tasks with intelligent workflows. Save hours every week and focus on what matters most.",
    color: "from-orange-500 to-red-500",
    stats: "10x faster",
  },
  {
    icon: BarChart3,
    title: "Predictive Insights",
    description:
      "AI-powered forecasting and trend analysis. Stay ahead of the curve with actionable business intelligence.",
    color: "from-pink-500 to-rose-500",
    stats: "95% precision",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy worldwide with edge computing. Serve users from 200+ locations with minimal latency.",
    color: "from-violet-500 to-purple-500",
    stats: "200+ regions",
  },
];

const stats = [
  { value: "10M+", label: "API Requests Daily" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "24/7", label: "Expert Support" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Features() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/70">
              Powered by Advanced AI
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Scale Faster
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Build intelligent applications with our comprehensive suite of
            AI-powered tools. From neural processing to predictive analytics,
            we've got you covered.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                {feature.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`}
                />
                <span className="text-xs text-white/70 font-medium">
                  {feature.stats}
                </span>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-full text-white/80 hover:text-white font-medium hover:bg-white/5 transition-all">
              View Documentation →
            </button>
          </div>

          <p className="mt-6 text-sm text-white/40">
            No credit card required. 14-day free trial.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-40"
        >
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs">SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span className="text-xs">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <LineChart className="w-4 h-4" />
            <span className="text-xs">ISO 27001</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
