var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1037851",
        "ok": "858879",
        "ko": "178972"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "45",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "33145",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "520",
        "ok": "490",
        "ko": "662"
    },
    "standardDeviation": {
        "total": "1156",
        "ok": "915",
        "ko": "1925"
    },
    "percentiles1": {
        "total": "284",
        "ok": "272",
        "ko": "318"
    },
    "percentiles2": {
        "total": "349",
        "ok": "337",
        "ko": "406"
    },
    "percentiles3": {
        "total": "1374",
        "ok": "1344",
        "ko": "1497"
    },
    "percentiles4": {
        "total": "3395",
        "ok": "3359",
        "ko": "3529"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 59589,
        "percentage": 6
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 686590,
        "percentage": 66
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 112700,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 178972,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "558.865",
        "ok": "462.492",
        "ko": "96.373"
    }
},
contents: {
"req_esloadtestposts-7b444": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation300x30m",
path: "EsLoadTestPostSearchSimulation300x30m",
pathFormatted: "req_esloadtestposts-7b444",
stats: {
    "name": "EsLoadTestPostSearchSimulation300x30m",
    "numberOfRequests": {
        "total": "1037851",
        "ok": "858879",
        "ko": "178972"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "45",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "33145",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "520",
        "ok": "490",
        "ko": "662"
    },
    "standardDeviation": {
        "total": "1156",
        "ok": "915",
        "ko": "1925"
    },
    "percentiles1": {
        "total": "284",
        "ok": "272",
        "ko": "318"
    },
    "percentiles2": {
        "total": "349",
        "ok": "337",
        "ko": "406"
    },
    "percentiles3": {
        "total": "1374",
        "ok": "1345",
        "ko": "1497"
    },
    "percentiles4": {
        "total": "3395",
        "ok": "3359",
        "ko": "3529"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 59589,
        "percentage": 6
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 686590,
        "percentage": 66
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 112700,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 178972,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "558.865",
        "ok": "462.492",
        "ko": "96.373"
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
