'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'My Python Learning Journey: From Zero to Data Structures',
    excerpt: 'Reflecting on my first week diving deep into Python fundamentals. From setting up environments to mastering lists and loops - here\'s what I learned and the challenges I faced along the way.',
    date: 'December 20, 2024',
    readTime: '6 min read',
    category: 'Learning Journey',
    content: `
      <h2>Starting Fresh with Python</h2>
      <p>This week marked the beginning of my structured Python learning journey, and honestly, I wasn't sure what to expect. Coming from a data science background, I've used Python before, but I realized I was missing some fundamental concepts. Module 01 was exactly what I needed to fill those gaps.</p>
      
      <h2>Session 01: Environment Setup and Basics</h2>
      <p>The first session was all about getting comfortable with Python environments. I've used Anaconda before, but I never really understood why it was so popular. This time, I took a different approach and really paid attention to what each tool does.</p>
      
      <p><strong>Google Colab became my best friend.</strong> I know it sounds basic, but being able to write and execute code directly in my browser without worrying about local installations was a game-changer. The interface is clean, and the shortcuts like Shift + Enter for running cells made everything feel smooth.</p>
      
      <p>What really clicked for me was understanding variables and data types properly. I used to just assign values without thinking about what Python was doing behind the scenes. Learning about the <code>type()</code> function was eye-opening - it's such a simple tool, but it helps you understand exactly what you're working with.</p>
      
      <h2>Session 02: Lists and Loops - The Real Game Changer</h2>
      <p>This is where things got interesting. I've worked with lists before, but I never really appreciated their power until this session. The concept of storing multiple items of different types in one structure? That's when I realized why Python is so flexible.</p>
      
      <p><strong>The for loop revelation:</strong> I've written for loops countless times, but understanding how they work with lists on a fundamental level changed everything. It's not just about iterating - it's about processing data systematically. When I wrote my first loop to go through a list of mixed data types, I felt like I finally "got" Python's philosophy.</p>
      
      <p>Built-in functions like <code>len()</code>, <code>sum()</code>, <code>max()</code>, and <code>min()</code> - these seem trivial, but they're incredibly powerful. I used to write custom functions for things that Python already handles beautifully. Learning about indexing and slicing was another "aha" moment. Being able to extract specific portions of data with simple syntax is something I'll use constantly.</p>
      
      <h2>Session 03: Advanced List Operations and Decision Making</h2>
      <p>This session was where I started feeling confident. Slicing with step sizes, reversing lists, and using methods like <code>append()</code>, <code>insert()</code>, and <code>pop()</code> - these are the building blocks of data manipulation.</p>
      
      <p><strong>f-strings changed my life.</strong> Okay, that's dramatic, but seriously, formatting output with f-strings is so much cleaner than what I was doing before. Being able to combine variables and text seamlessly makes debugging and displaying results so much easier.</p>
      
      <p>The <code>range()</code> function was another revelation. I've used it in loops, but understanding how it generates sequences of numbers opened up new possibilities. Combined with <code>list()</code>, I can create number sequences quickly, which is incredibly useful for data analysis.</p>
      
      <p><strong>Conditional statements were the perfect capstone.</strong> Learning about <code>if</code>, <code>elif</code>, and <code>else</code> statements felt like I was finally learning to make programs that could think. Writing a simple program to check if a number is even or odd might seem basic, but it represents the foundation of decision-making in programming.</p>
      
      <h2>What Surprised Me</h2>
      <p>I was surprised by how much I didn't know about Python basics. Coming from a data science background, I thought I had a good grasp of Python, but these sessions revealed gaps in my understanding that I didn't even know existed.</p>
      
      <p>The <code>input()</code> function was something I'd never used properly. Understanding how it reads user input as strings by default and how to convert it to integers with <code>int()</code> was crucial. It's these small details that make the difference between writing code that works and writing code that works well.</p>
      
      <h2>Challenges I Faced</h2>
      <p>One challenge was getting comfortable with Python's syntax. Coming from other languages, the indentation-based structure took some getting used to. But once I understood that indentation isn't just formatting - it's part of the language structure - everything clicked.</p>
      
      <p>Another challenge was remembering all the built-in functions and methods. There are so many! But I learned that it's not about memorizing everything - it's about understanding the patterns and knowing where to look when you need something specific.</p>
      
      <h2>How This Connects to My Data Science Work</h2>
      <p>Even though these are basic concepts, I can already see how they'll improve my data science work. Understanding lists properly means I can manipulate data more efficiently. Mastering loops means I can process datasets more systematically. And getting comfortable with conditional statements means I can write more robust data processing scripts.</p>
      
      <p>These fundamentals are the building blocks of everything I do in data science. Whether I'm cleaning data, performing analysis, or building models, I'll be using these concepts constantly.</p>
      
      <h2>What's Next</h2>
      <p>I'm excited to continue this learning journey. These three sessions gave me a solid foundation, and I can already see how the next modules will build on these concepts. The systematic approach to learning Python is exactly what I needed.</p>
      
      <p>If you're starting your Python journey or looking to strengthen your fundamentals, I highly recommend taking a structured approach like this. Sometimes going back to basics is the best way to move forward.</p>
      
      <p><em>What Python concepts have you found most challenging or rewarding to learn? I'd love to hear about your experiences!</em></p>
    `
  },
  {
    id: 2,
    title: 'Advanced Causal Inference: Beyond Traditional A/B Testing',
    excerpt: 'Deep dive into sophisticated causal inference methods I\'m exploring to solve complex business problems. Sharing insights from my latest research on uplift modeling and heterogeneous treatment effects.',
    date: 'December 15, 2024',
    readTime: '12 min read',
    category: 'Advanced Analytics',
    content: `
      <h2>Introduction to Advanced Causal Inference</h2>
      <p>As an experienced Data Scientist, I've been diving deeper into sophisticated causal inference methods that go far beyond traditional A/B testing. In this post, I'll share insights from my latest research and practical applications of advanced causal modeling techniques.</p>
      
      <h2>Beyond Traditional A/B Testing</h2>
      <p>While A/B testing remains valuable, modern businesses face complex scenarios where traditional methods fall short:</p>
      <ul>
        <li><strong>Network Effects:</strong> When user behaviors influence each other</li>
        <li><strong>Heterogeneous Treatment Effects:</strong> Different responses across user segments</li>
        <li><strong>Time-varying Effects:</strong> Treatment impacts that change over time</li>
        <li><strong>Selection Bias:</strong> Non-random assignment in observational data</li>
      </ul>
      
      <h2>Advanced Methods I'm Exploring</h2>
      <p>Here are the sophisticated techniques I've been implementing and teaching:</p>
      <ul>
        <li><strong>Uplift Modeling:</strong> Identifying individuals most likely to respond to treatment</li>
        <li><strong>Instrumental Variables:</strong> Using natural experiments to establish causality</li>
        <li><strong>Regression Discontinuity:</strong> Exploiting arbitrary thresholds for causal identification</li>
        <li><strong>Difference-in-Differences:</strong> Comparing treatment and control groups over time</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>In my current role, I've applied these methods to solve complex business problems:</p>
      <ul>
        <li>Marketing campaign optimization with heterogeneous customer responses</li>
        <li>Product feature impact analysis accounting for user network effects</li>
        <li>Pricing strategy evaluation using natural experiments</li>
        <li>Customer retention modeling with time-varying treatment effects</li>
      </ul>
      
      <h2>Teaching and Knowledge Sharing</h2>
      <p>One of my passions is sharing these advanced concepts with the data science community. Through this blog and my work, I aim to:</p>
      <ul>
        <li>Demystify complex causal inference concepts</li>
        <li>Provide practical implementation guidance</li>
        <li>Share real-world case studies and lessons learned</li>
        <li>Help fellow data scientists avoid common pitfalls</li>
      </ul>
      
      <h2>What's Next</h2>
      <p>I'm currently exploring Bayesian causal inference methods and their applications in high-stakes decision making. Stay tuned for more deep dives into advanced statistical methods, practical implementations, and insights from cutting-edge research!</p>
    `
  },
  {
    id: 3,
    title: 'Data Science Tips & Tricks: Pro Techniques from the Field',
    excerpt: 'Essential tips and tricks I\'ve learned from years of data science practice. From debugging models to optimizing performance, these insights will save you hours and improve your results.',
    date: 'December 10, 2024',
    readTime: '8 min read',
    category: 'Tips & Tricks',
    content: `
      <h2>Introduction</h2>
      <p>After years of working in data science, I've accumulated numerous tips and tricks that have saved me countless hours and improved my results significantly. In this post, I'll share the most valuable techniques I use daily.</p>
      
      <h2>Data Preprocessing Tricks</h2>
      <h3>1. Smart Missing Value Handling</h3>
      <p><strong>Pro Tip:</strong> Instead of just dropping missing values, create a "missing indicator" feature. This often contains valuable information about data quality and user behavior patterns.</p>
      <pre><code># Create missing indicators
df['has_missing_income'] = df['income'].isnull().astype(int)
df['income_filled'] = df['income'].fillna(df['income'].median())</code></pre>
      
      <h3>2. Feature Engineering Shortcuts</h3>
      <p><strong>Pro Tip:</strong> Use pandas' built-in datetime features more effectively:</p>
      <pre><code># Extract multiple time features in one go
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek
df['is_weekend'] = df['date'].dt.dayofweek.isin([5, 6])</code></pre>
      
      <h2>Model Development Hacks</h2>
      <h3>3. Quick Model Comparison</h3>
      <p><strong>Pro Tip:</strong> Use sklearn's VotingClassifier for rapid model comparison:</p>
      <pre><code>from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC

# Quick ensemble comparison
models = [
    ('lr', LogisticRegression()),
    ('rf', RandomForestClassifier()),
    ('svm', SVC(probability=True))
]
ensemble = VotingClassifier(models, voting='soft')</code></pre>
      
      <h3>4. Hyperparameter Tuning Shortcut</h3>
      <p><strong>Pro Tip:</strong> Start with a coarse grid search, then zoom in on promising regions:</p>
      <pre><code># Coarse search first
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 20, None],
    'min_samples_split': [2, 5, 10]
}

# Then fine-tune around best parameters
param_grid_fine = {
    'n_estimators': [80, 100, 120],
    'max_depth': [8, 10, 12],
    'min_samples_split': [3, 5, 7]
}</code></pre>
      
      <h2>Performance Optimization</h2>
      <h3>5. Memory Optimization</h3>
      <p><strong>Pro Tip:</strong> Reduce memory usage by optimizing data types:</p>
      <pre><code># Convert to appropriate dtypes
df['category_col'] = df['category_col'].astype('category')
df['int_col'] = pd.to_numeric(df['int_col'], downcast='integer')
df['float_col'] = pd.to_numeric(df['float_col'], downcast='float')</code></pre>
      
      <h3>6. Parallel Processing</h3>
      <p><strong>Pro Tip:</strong> Use joblib for easy parallelization:</p>
      <pre><code>from joblib import Parallel, delayed

# Parallel feature engineering
def process_feature(data):
    return data.apply(some_function)

results = Parallel(n_jobs=-1)(
    delayed(process_feature)(df[col]) for col in feature_columns
)</code></pre>
      
      <h2>Debugging & Validation</h2>
      <h3>7. Model Debugging Checklist</h3>
      <p><strong>Pro Tip:</strong> When models perform poorly, check these in order:</p>
      <ul>
        <li>Data leakage (future information in training data)</li>
        <li>Target variable distribution (class imbalance)</li>
        <li>Feature scaling and normalization</li>
        <li>Cross-validation setup (temporal vs. random splits)</li>
        <li>Hyperparameter ranges (too narrow/wide)</li>
      </ul>
      
      <h3>8. Quick Validation Setup</h3>
      <p><strong>Pro Tip:</strong> Use sklearn's cross_val_score with custom scoring:</p>
      <pre><code>from sklearn.model_selection import cross_val_score
from sklearn.metrics import make_scorer

# Custom scoring function
def custom_metric(y_true, y_pred):
    return your_custom_calculation(y_true, y_pred)

custom_scorer = make_scorer(custom_metric, greater_is_better=True)
scores = cross_val_score(model, X, y, cv=5, scoring=custom_scorer)</code></pre>
      
      <h2>Visualization Hacks</h2>
      <h3>9. Quick EDA Template</h3>
      <p><strong>Pro Tip:</strong> Create reusable EDA functions:</p>
      <pre><code>def quick_eda(df, target_col=None):
    print(f"Shape: {df.shape}")
    print(f"Missing values: {df.isnull().sum().sum()}")
    
    if target_col:
        print(f"Target distribution: {df[target_col].value_counts()}")
    
    # Correlation heatmap
    plt.figure(figsize=(12, 8))
    sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
    plt.show()</code></pre>
      
      <h3>10. Model Interpretation Shortcuts</h3>
      <p><strong>Pro Tip:</strong> Use SHAP for quick model interpretation:</p>
      <pre><code>import shap

# Quick SHAP analysis
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values, X_test)</code></pre>
      
      <h2>Production Deployment Tips</h2>
      <h3>11. Model Versioning</h3>
      <p><strong>Pro Tip:</strong> Always version your models and track performance:</p>
      <pre><code>import joblib
import datetime

# Save with timestamp
timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
model_name = f"model_v{timestamp}.joblib"
joblib.dump(model, model_name)</code></pre>
      
      <h3>12. Monitoring Setup</h3>
      <p><strong>Pro Tip:</strong> Set up basic model monitoring from day one:</p>
      <ul>
        <li>Track prediction distributions over time</li>
        <li>Monitor feature drift</li>
        <li>Set up alerts for performance degradation</li>
        <li>Log prediction confidence scores</li>
      </ul>
      
      <h2>Final Thoughts</h2>
      <p>These tips have been game-changers in my data science practice. The key is to build these techniques into your workflow gradually. Start with the ones that address your current pain points, and you'll see immediate improvements in efficiency and results.</p>
      
      <p>What tips and tricks have you discovered? I'd love to hear about your favorite techniques in the comments!</p>
    `
  }
];

const BlogPost = ({ post }: { post: typeof blogPosts[0] }) => (
  <motion.article
    className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -5 }}
  >
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
          {post.readTime}
        </span>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      
      <div className="flex items-center text-gray-500 mb-6">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {post.date}
      </div>
      
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  </motion.article>
);

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Lakshmipathiraju
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="/#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</Link>
              <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Data Science Deep Dives</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Advanced Analytics, Research Insights, and Teaching Moments
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Sharing advanced data science techniques, research findings, and practical applications. 
              From sophisticated causal inference to cutting-edge ML methods - learn with an experienced practitioner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Latest Posts</h2>
            
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/plpraju2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshmipathirajup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400">&copy; 2024 Lakshmipathiraju Pericharla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

