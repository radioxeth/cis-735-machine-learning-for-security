import numpy as np

keys = [50, 60, 80, 50, 500, 78, 90]
r = 160
b = 4
for i in range(len(keys)):
    key_i = keys[i]
    keys_split = np.concatenate([keys[:i], keys[i + 1 :]])
    keys_filtered = [key for key in keys_split if key >= key_i - r and key <= key_i + r]
    print(keys_filtered)
    is_outlier = "OUTLIER" if len(keys_filtered) < b else "IN"
    print(f"{key_i} is {is_outlier}")
