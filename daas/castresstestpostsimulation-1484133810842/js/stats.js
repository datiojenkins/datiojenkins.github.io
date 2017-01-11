var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2923188",
        "ok": "2083542",
        "ko": "839646"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "39",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "91104",
        "ok": "90085",
        "ko": "91104"
    },
    "meanResponseTime": {
        "total": "993",
        "ok": "913",
        "ko": "1192"
    },
    "standardDeviation": {
        "total": "4397",
        "ok": "2577",
        "ko": "7125"
    },
    "percentiles1": {
        "total": "135",
        "ok": "140",
        "ko": "87"
    },
    "percentiles2": {
        "total": "422",
        "ok": "1096",
        "ko": "109"
    },
    "percentiles3": {
        "total": "3173",
        "ok": "3384",
        "ko": "1334"
    },
    "percentiles4": {
        "total": "15161",
        "ok": "12317",
        "ko": "59923"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 1362774,
        "percentage": 47
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 156664,
        "percentage": 5
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 564104,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 839646,
        "percentage": 29
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2425.667",
        "ok": "1728.927",
        "ko": "696.74"
    }
},
contents: {
"req_castresstestpos-57704": {
        type: "REQUEST",
        name: "CaStressTestPostSimulation",
path: "CaStressTestPostSimulation",
pathFormatted: "req_castresstestpos-57704",
stats: {
    "name": "CaStressTestPostSimulation",
    "numberOfRequests": {
        "total": "2923188",
        "ok": "2083542",
        "ko": "839646"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "39",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "91104",
        "ok": "90085",
        "ko": "91104"
    },
    "meanResponseTime": {
        "total": "993",
        "ok": "913",
        "ko": "1192"
    },
    "standardDeviation": {
        "total": "4397",
        "ok": "2577",
        "ko": "7125"
    },
    "percentiles1": {
        "total": "135",
        "ok": "140",
        "ko": "87"
    },
    "percentiles2": {
        "total": "421",
        "ok": "1096",
        "ko": "109"
    },
    "percentiles3": {
        "total": "3173",
        "ok": "3384",
        "ko": "1334"
    },
    "percentiles4": {
        "total": "15161",
        "ok": "12319",
        "ko": "59923"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 1362774,
        "percentage": 47
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 156664,
        "percentage": 5
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 564104,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 839646,
        "percentage": 29
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2425.667",
        "ok": "1728.927",
        "ko": "696.74"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
