def TwoSum(nums,Target):
    seen = {}
    for i in range(len(nums)):
        com = Target - nums[i]
        if com in seen:
            return [seen[com],i]
        seen[nums[i]] = i
n = list(map(int,input().split()))
target = 9
print(TwoSum(n,target))