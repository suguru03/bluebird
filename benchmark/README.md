**2015-01-05** Latest results, using latest versions of modules:

    ├── async@0.9.0
    ├── davy@0.3.3
    ├── deferred@0.7.1
    ├── kew@0.5.0-alpha.1
    ├── lie@2.8.0
    ├── optimist@0.6.1
    ├── promise@6.0.1
    ├── q@1.1.2
    ├── rsvp@3.0.16
    ├── vow@0.4.7
    ├── when@3.6.4
    ├── rx@2.3.25
    ├── co@4.2.0
    ├── baconjs@0.7.43
    ├── highland@2.3.0

bench doxbee

    results for 10000 parallel executions, 1 ms per I/O op

    file                                       time(ms)  memory(MB)
    callbacks-baseline.js                           214       27.03
    promises-suguru03-aigle.js                      304       48.38
    callbacks-suguru03-neo-async-waterfall.js       312       35.63
    promises-bluebird-generator.js                  328       37.34
    promises-cujojs-when.js                         511       66.89
    promises-tildeio-rsvp.js                        528       81.32
    promises-lvivski-davy.js                        593       91.18
    promises-then-promise.js                        597       72.99
    promises-native-async-await.js                  631      108.68
    generators-tj-co.js                             660       80.39
    promises-bluebird.js                            681       84.18
    promises-ecmascript6-native.js                  696      104.88
    callbacks-caolan-async-waterfall.js             788       80.94
    promises-dfilatov-vow.js                        904      134.86
    promises-obvious-kew.js                        1205      115.54
    promises-calvinmetcalf-lie.js                  1228      116.02
    streamline-generators.js                       1281       82.92
    promises-medikoo-deferred.js                   1392       96.83
    observables-pozadi-kefir.js                    1669      143.13
    streamline-callbacks.js                        2010      105.96
    observables-Reactive-Extensions-RxJS.js        3293      187.86
    promises-kriskowal-q.js                       10433      305.79
    observables-caolan-highland.js                14689      434.57
    observables-baconjs-bacon.js.js               30249      751.06

    Platform info:
    Darwin 16.7.0 x64
    Node.JS 9.3.0
    V8 6.2.414.46-node.15
    Intel(R) Core(TM) i5-4278U CPU @ 2.60GHz × 4

bench parallel (`--p 25`)

results for 10000 parallel executions, 1 ms per I/O op

    file                                      time(ms)  memory(MB)
    callbacks-baseline.js                          453       76.47
    callbacks-suguru03-neo-async-parallel.js       508       85.13
    promises-suguru03-aigle.js                     589      110.34
    promises-bluebird.js                           631      109.69
    promises-bluebird-generator.js                 667      106.34
    promises-lvivski-davy.js                       738      164.16
    callbacks-caolan-async-parallel.js             999      156.10
    promises-cujojs-when.js                       1074      168.91
    promises-ecmascript6-native.js                1793      299.67
    promises-native-async-await.js                1950      318.38
    promises-tildeio-rsvp.js                      2121      355.22
    promises-then-promise.js                      2182      312.60
    promises-medikoo-deferred.js                  2503      279.09
    promises-dfilatov-vow.js                      2992      522.10
    promises-calvinmetcalf-lie.js                 3008      356.61
    promises-obvious-kew.js                       5236      500.58
    streamline-generators.js                     15330      913.39
    streamline-callbacks.js                      40410     1176.15

    Platform info:
    Darwin 16.7.0 x64
    Node.JS 9.3.0
    V8 6.2.414.46-node.15
    Intel(R) Core(TM) i5-4278U CPU @ 2.60GHz × 4
