# In this task, you are going to conduct exploratory and confirmatory data analysis
# for 4 features in our Tweet Relevance Judgment problem:
# 1. #entities;
# 2. #entityTypes;
# 3. #tweetsPosted;
# 4. sentiment.

# %% Imports
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import mannwhitneyu

# %% Setup data
df=pd.read_csv("/home/steffan/Downloads/task2_data.csv")
feature = "#tweetsPosted"
nr_entities = df[feature]

nr_entities_relevant = df[df["relevanceJudge"]==1][feature]
nr_entities_non_relevant = df[df["relevanceJudge"]==0][feature]
nr_entities_relevant.describe()
nr_entities_non_relevant.describe()

# %% Test plot
plt.figure();

nr_entities_non_relevant.plot(kind="hist")
plt.savefig("img/non_relevant_%(feature)s.png" % locals())
plt.show()

nr_entities_relevant.plot(kind="hist")
plt.savefig("img/relevant_%(feature)s.png" % locals())
plt.show()

# %% Determine relevant things
u, p_value = mannwhitneyu(nr_entities_non_relevant, nr_entities_relevant)
u
p_value
