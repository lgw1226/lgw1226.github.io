export const experiences = [
	{
		"company": "Republic of Korea Army",
		"time": "Oct. 2020 – Apr. 2022",
		"title": "Mandatory Military Service",
		"location": "South Korea",
		"description": "Fulfilled mandatory military service requirement."
	},
	{
		"company": "Energy Device and Nano-Engineering Lab., SNU",
		"time": "Feb. 2020 – June 2020",
		"title": "Research Intern",
		"location": "Seoul, South Korea",
		"description": "Developed a simulation for a neuromorphic computing device and summarized research data weekly."
	},
	{
		"company": "Undergraduate Research Program, X-corps, SNU",
		"time": "May 2019 – Feb. 2020",
		"title": "Research Associate",
		"location": "Seoul, South Korea",
		"description": "Developed a machine vision system for deformable objects using OpenCV and an Intel RealSense RGBD sensor."
	},
	{
		"company": "Undergraduate Independent Research, SNU",
		"time": "Mar. 2018 – July 2018",
		"title": "Research Associate",
		"location": "Seoul, South Korea",
		"description": "Analyzed rear spoiler aerodynamics using SolidWorks and ANSYS FLUENT."
	},
	{
		"company": "Extreme Environment Robotics Lab., AICT",
		"time": "Nov. 2016 – Mar. 2017",
		"title": "Research Intern",
		"location": "Suwon, South Korea",
		"description": "Developed a stepper motor acceleration profile generator using an STM32 microcontroller."
	},
	{
		"company": "Creative Engineering Design Competition, SNU",
		"time": "Fall 2016",
		"title": "Team Leader",
		"location": "Seoul, South Korea",
		"description": "Led a team to win the 'Creative Design Award' at RoboCon 2016 using integrated pneumatic and motor systems."
	}
];

export const education = [
	{
		"school": "Lab for Autonomous Robotics Research, SNU",
		"time": "Mar. 2023 – Present",
		"degree": "PhD Candidate in Aerospace Engineering",
		"location": "Seoul, South Korea",
		"description": ""
	},
	{
		"school": "Seoul National University",
		"time": "Mar. 2016 – Oct. 2020",
		"degree": "Bachelor of Mechanical Engineering",
		"location": "Seoul, South Korea",
		"description": ""
	}
];

export const skills = [
	{
		"title": "Machine Learning & Frameworks",
		"description": "Reinforcement Learning, Imitation Learning, Python, PyTorch, Flax."
	},
	{
		"title": "Robotics & Software",
		"description": "Robot Operating System (ROS2), Computer Vision (OpenCV), UR3 robot integration."
	}
];

export const publications = [
	{
		"title": "FLAG: Flow Policy MaxEnt-RL by Latent Augmented Guidance",
		"authors": "Sungha Kim<sup>1</sup>, Gawon Lee<sup>1</sup>, Jusuk Lee, Jonghae Park, H. Jin Kim, Daesol Cho*",
		"journal": "Submitted to Advances in Neural Information Processing Systems (NeurIPS)",
		"time": "2026",
		"link": "",
		"abstract": "Maximum entropy reinforcement learning (MaxEnt-RL) enables robust exploration, yet practical implementations often restrict policies to simple Gaussians. While recent approaches incorporate expressive generative policies via importance-weighted supervised learning, they are prone to importance weight collapse, which limits their scalability in high-dimensional action spaces. Our key insight is to mitigate this limitation by localizing the sampling region, avoiding the weight degeneracy induced by importance sampling over the entire action space. To instantiate this insight, we introduce FLAG (Flow policy with Latent-Augmented Guidance). FLAG augments the state space with a flow latent variable and optimizes a provably consistent proxy MaxEnt-RL objective. We empirically demonstrate that FLAG enables expressive policy optimization with limited importance samples and scales to high-dimensional control tasks. Furthermore, FLAG achieves state-of-the-art performance across challenging benchmarks."
	},
	{
		"title": "Leveraging Temporally Extended Behavior Sharing for Multi-task Reinforcement Learning",
		"authors": "Gawon Lee, Daesol Cho, H. Jin Kim*",
		"journal": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
		"time": "2025",
		"link": "https://arxiv.org/abs/2509.20766",
		"abstract": "Multi-task reinforcement learning (MTRL) offers a promising approach to improve sample efficiency and generalization by training agents across multiple tasks, enabling knowledge sharing between them. However, applying MTRL to robotics remains challenging due to the high cost of collecting diverse task data. To address this, we propose MT-Lévy, a novel exploration strategy that enhances sample efficiency in MTRL environments by combining behavior sharing across tasks with temporally extended exploration inspired by Lévy flight. MT-Lévy leverages policies trained on related tasks to guide exploration towards key states, while dynamically adjusting exploration levels based on task success ratios. This approach enables more efficient state-space coverage, even in complex robotics environments. Empirical results demonstrate that MT-Lévy significantly improves exploration and sample efficiency, supported by quantitative and qualitative analyses. Ablation studies further highlight the contribution of each component, showing that combining behavior sharing with adaptive exploration strategies can significantly improve the practicality of MTRL in robotics applications."
	},
];