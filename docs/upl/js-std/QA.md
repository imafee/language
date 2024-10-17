# QA

## 可以上传给后端的数据结构

- 原始类型
- 可以被序列化的：Object、Array

像 map 应该先转化为 Entries 数据结构，然后再对它进行序列化。因为 Object 只支持 String 和 Symbol 键类型可能存在键值丢失的情况，
