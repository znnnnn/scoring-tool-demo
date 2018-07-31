<template>
    <el-container>
        <el-header>
            <h1>
                拓荒工作室活动计分
            </h1>
        </el-header>
        <el-main>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="gname" label="组名" width="180">
                </el-table-column>
                <el-table-column prop="score" label="得分">
                </el-table-column>
                <el-table-column prop="progress" label="进度条">
                    <template slot-scope="scope">
                        <el-progress :text-inside="true" :stroke-width="18" :percentage="parseInt(scope.row.score)" :color="scope.row.color"></el-progress>
                    </template>
                </el-table-column>
                <el-table-column prop="action" label="操作">
                    <template slot-scope="scope">
                        <el-button type="success" plain  @click="handleEdit(scope.$index, scope.row)">加分</el-button>
                        <el-button type="danger" plain @click="handleEdit(scope.$index, scope.row)">减分</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress> -->
        </el-main>
    </el-container>
</template>



<script>
export default {
    data() {
        return {
            tableData: [
                {
                    gname: "第一组",
                    score: "90",
                    color: "#337ab7"
                },
                {
                    gname: "第二组",
                    score: "60",
                    color: "#67C23A"
                },
                {
                    gname: "第三组",
                    score: "30",
                    color: "#E6A23C"
                },
                {
                    gname: "王小虎",
                    score: "50",
                    color: "#F56C6C"
                },
                {
                    gname: "王小虎",
                    score: "80",
                    color: "#5bc0de"
                }
            ]
        };
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
};
</script>


<style lang="css">

body {
    background: #f8f9fa;
}

.el-header {
    text-align: center;
}
</style>
