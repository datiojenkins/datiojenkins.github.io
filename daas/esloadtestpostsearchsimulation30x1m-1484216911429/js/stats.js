var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3077",
        "ok": "0",
        "ko": "3077"
    },
    "minResponseTime": {
        "total": "322",
        "ok": "-",
        "ko": "322"
    },
    "maxResponseTime": {
        "total": "2652",
        "ok": "-",
        "ko": "2652"
    },
    "meanResponseTime": {
        "total": "1177",
        "ok": "-",
        "ko": "1177"
    },
    "standardDeviation": {
        "total": "537",
        "ok": "-",
        "ko": "537"
    },
    "percentiles1": {
        "total": "1130",
        "ok": "-",
        "ko": "1130"
    },
    "percentiles2": {
        "total": "1225",
        "ok": "-",
        "ko": "1225"
    },
    "percentiles3": {
        "total": "2400",
        "ok": "-",
        "ko": "2400"
    },
    "percentiles4": {
        "total": "2562",
        "ok": "-",
        "ko": "2562"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 3077,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "24.835",
        "ok": "-",
        "ko": "24.835"
    }
},
contents: {
"req_esloadtestposts-79439": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation30x1m",
path: "EsLoadTestPostSearchSimulation30x1m",
pathFormatted: "req_esloadtestposts-79439",
stats: {
    "name": "EsLoadTestPostSearchSimulation30x1m",
    "numberOfRequests": {
        "total": "3077",
        "ok": "0",
        "ko": "3077"
    },
    "minResponseTime": {
        "total": "322",
        "ok": "-",
        "ko": "322"
    },
    "maxResponseTime": {
        "total": "2652",
        "ok": "-",
        "ko": "2652"
    },
    "meanResponseTime": {
        "total": "1177",
        "ok": "-",
        "ko": "1177"
    },
    "standardDeviation": {
        "total": "537",
        "ok": "-",
        "ko": "537"
    },
    "percentiles1": {
        "total": "1130",
        "ok": "-",
        "ko": "1130"
    },
    "percentiles2": {
        "total": "1225",
        "ok": "-",
        "ko": "1225"
    },
    "percentiles3": {
        "total": "2400",
        "ok": "-",
        "ko": "2400"
    },
    "percentiles4": {
        "total": "2562",
        "ok": "-",
        "ko": "2562"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 3077,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "24.835",
        "ok": "-",
        "ko": "24.835"
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
