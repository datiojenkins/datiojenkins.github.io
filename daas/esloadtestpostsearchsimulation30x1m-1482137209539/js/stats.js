var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "23812",
        "ok": "13095",
        "ko": "10717"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "49",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "481",
        "ok": "481",
        "ko": "177"
    },
    "meanResponseTime": {
        "total": "75",
        "ok": "95",
        "ko": "51"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "25",
        "ko": "15"
    },
    "percentiles1": {
        "total": "78",
        "ok": "87",
        "ko": "45"
    },
    "percentiles2": {
        "total": "88",
        "ok": "101",
        "ko": "53"
    },
    "percentiles3": {
        "total": "131",
        "ok": "149",
        "ko": "83"
    },
    "percentiles4": {
        "total": "178",
        "ok": "197",
        "ko": "106"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13095,
        "percentage": 55
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10717,
        "percentage": 45
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "378.136",
        "ok": "207.95",
        "ko": "170.187"
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
        "total": "23812",
        "ok": "13095",
        "ko": "10717"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "49",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "481",
        "ok": "481",
        "ko": "177"
    },
    "meanResponseTime": {
        "total": "75",
        "ok": "95",
        "ko": "51"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "25",
        "ko": "15"
    },
    "percentiles1": {
        "total": "78",
        "ok": "87",
        "ko": "45"
    },
    "percentiles2": {
        "total": "89",
        "ok": "100",
        "ko": "53"
    },
    "percentiles3": {
        "total": "131",
        "ok": "149",
        "ko": "83"
    },
    "percentiles4": {
        "total": "178",
        "ok": "197",
        "ko": "106"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13095,
        "percentage": 55
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10717,
        "percentage": 45
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "378.136",
        "ok": "207.95",
        "ko": "170.187"
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
