var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "741970",
        "ok": "560963",
        "ko": "181007"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "48",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "91260",
        "ok": "67596",
        "ko": "91260"
    },
    "meanResponseTime": {
        "total": "4874",
        "ok": "2470",
        "ko": "12324"
    },
    "standardDeviation": {
        "total": "14065",
        "ok": "5604",
        "ko": "22423"
    },
    "percentiles1": {
        "total": "325",
        "ok": "303",
        "ko": "478"
    },
    "percentiles2": {
        "total": "2301",
        "ok": "1490",
        "ko": "7311"
    },
    "percentiles3": {
        "total": "32202",
        "ok": "13826",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "31462",
        "ko": "60009"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 29826,
        "percentage": 4
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 292135,
        "percentage": 39
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 239002,
        "percentage": 32
    },
    "group4": {
        "name": "failed",
        "count": 181007,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "608.76",
        "ok": "460.25",
        "ko": "148.51"
    }
},
contents: {
"req_esstresstestpos-0fb32": {
        type: "REQUEST",
        name: "EsStressTestPostSearchSimulation",
path: "EsStressTestPostSearchSimulation",
pathFormatted: "req_esstresstestpos-0fb32",
stats: {
    "name": "EsStressTestPostSearchSimulation",
    "numberOfRequests": {
        "total": "741970",
        "ok": "560963",
        "ko": "181007"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "48",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "91260",
        "ok": "67596",
        "ko": "91260"
    },
    "meanResponseTime": {
        "total": "4874",
        "ok": "2470",
        "ko": "12324"
    },
    "standardDeviation": {
        "total": "14065",
        "ok": "5604",
        "ko": "22423"
    },
    "percentiles1": {
        "total": "325",
        "ok": "303",
        "ko": "478"
    },
    "percentiles2": {
        "total": "2305",
        "ok": "1490",
        "ko": "7311"
    },
    "percentiles3": {
        "total": "32202",
        "ok": "13814",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "31462",
        "ko": "60009"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 29826,
        "percentage": 4
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 292135,
        "percentage": 39
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 239002,
        "percentage": 32
    },
    "group4": {
        "name": "failed",
        "count": 181007,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "608.76",
        "ok": "460.25",
        "ko": "148.51"
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
