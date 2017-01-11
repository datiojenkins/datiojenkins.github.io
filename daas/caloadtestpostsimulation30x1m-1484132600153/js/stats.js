var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "78672",
        "ok": "78672",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "422",
        "ok": "422",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles1": {
        "total": "44",
        "ok": "44",
        "ko": "-"
    },
    "percentiles2": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles3": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles4": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 78644,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 28,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "639.927",
        "ok": "639.927",
        "ko": "-"
    }
},
contents: {
"req_caloadtestposts-4ee46": {
        type: "REQUEST",
        name: "CaLoadTestPostSimulation30x1m",
path: "CaLoadTestPostSimulation30x1m",
pathFormatted: "req_caloadtestposts-4ee46",
stats: {
    "name": "CaLoadTestPostSimulation30x1m",
    "numberOfRequests": {
        "total": "78672",
        "ok": "78672",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "422",
        "ok": "422",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles1": {
        "total": "44",
        "ok": "44",
        "ko": "-"
    },
    "percentiles2": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles3": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles4": {
        "total": "86",
        "ok": "85",
        "ko": "-"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 78644,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 28,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "639.927",
        "ok": "639.927",
        "ko": "-"
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
