<template>
    <div class="learn-point">
        <el-row :gutter="20">
            <el-col :span="12" v-for="item in points" :key="item">
                <div style="text-align: left;margin:10px;">{{item}}</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props: ["points"]
}
</script>

