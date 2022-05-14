% Matlab code for Optimal Power flow by Newton's Methods
% Source Code Author: Mr.D. Maharajan
% Source Created Date: 08.11.2011
% Modified date:25.11.2011
% Modification History :
% Modi.Date====================Changes History=============================
%Error Identified
%HDELDV Changed
%HDELDV sign changed
% =============================Changes History=============================
% run 'format SHORT G'
% =========================================================================
clc;
clear;
basemva = 100;
accuracy = 0.01;
maxiter = 5;
% =========================================================================
%fuel cost co-efficient
% Bus.No  Gen  A   B   C
Coeff = [
    1 1 60 200 140 % F1=60*Pg1^2+200*Pg1^1+140 Rs/hr
    2 2 75 150 120 % F2=75*Pg2^2+150*Pg2^1+120 Rs/hr
    ];
%Assigning Coefficeint data values
Fno = max(Coeff(:, 2));
Acost = Coeff(:, 3);
Bcost = Coeff(:, 4);
Ccost = Coeff(:, 5);
%Bus Data
% =========================================================================
%       BUS_NO BUS_Code	V_Mag	Ang	PD	QD	PG	 QG Qmin Qmax Inj_Var
busdata = [
        1 1 1.04 0	20 10	0 0 0 0 0
        2 2 1.04 0	0	0	0 0 0 0 0
        3 0 1.00 0	150	6	0 0 0 0 0
        ];
%==========================================================================
%Assigning Busdata values
bno = busdata(:, 1);
bcode = busdata(:, 2);
V = busdata(:, 3);
Ang = busdata(:, 4);
PD = busdata(:, 5) / basemva;
QD = busdata(:, 6) / basemva;
PG = busdata(:, 7);
QG = busdata(:, 8);
Qmin = busdata(:, 9);
Qmax = busdata(:, 10); Qinj = busdata(:, 11);
%Line Data
% =========================================================================
% BUS BUS	R(P.U)	X(P.U.)	B/2(P.U.) Tap  MVA
linedata = [
    1 2	0.02	0.08	0.02 1 295
    1 3	0.02	0.08	0.02 1 295
    2 3	0.02	0.08	0.02 1 295
];
%==========================================================================
j = sqrt(-1); i = sqrt(-1);
%Assigning line data values
sb = linedata(:, 1);
eb = linedata(:, 2);
r = linedata(:, 3);
x = linedata(:, 4);
b = j * linedata(:, 5);
tap = linedata(:, 6);
nbr = length(linedata(:, 1));

for n = 1:nbr

    if tap(n) <= 0
        tap(n) = 1;
    end

end

nbus = max(max(sb), max(eb));
Z = r + j * x;
y = ones(nbr, 1) ./ Z;
% =========================================================================
% Y-bus formulation
Y = zeros(nbus, nbus);
% formation of the off diagonal elements
for k = 1:nbr;
    Y(sb(k), eb(k)) = Y(sb(k), eb(k)) - y(k) / tap(k);
    Y(eb(k), sb(k)) = Y(sb(k), eb(k));
end

% formation of the diagonal elements
for n = 1:nbus

    for k = 1:nbr

        if sb(k) == n
            Y(n, n) = Y(n, n) + y(k) / (tap(k)^2) + b(k);
        elseif eb(k) == n
            Y(n, n) = Y(n, n) + y(k) +b(k);
        end

    end

end

Y; G = real(Y); B = imag(Y);
% =========================================================================
ns = 0;
ng = 0;
nl = 0;
ngs = zeros(1, nbus);
nss = zeros(1, nbus);

for k = 1:nbus
    if bcode(k) == 1, ns = ns + 1; else end %No of Slack Buses
    if bcode(k) == 2, ng = ng + 1; else end %No of Generator Buses
    if bcode(k) == 0, nl = nl + 1; else end %No of load      Buses
    ngs(k) = ng;
    nss(k) = ns;
end

% Initial value of lambda calculation
Pdem = sum(PD);
Qdem = sum(QD);
lamiter1 = 0;
lamiter2 = 0;

for i = 1:ns + ng
    lamiter1 = lamiter1 + Bcost(i) / (2 * Acost(i));
    lamiter2 = lamiter2 + 1 / (2 * Acost(i));
end

lambdap = zeros(1, nbus);
lambdaq = zeros(1, nbus);
Pg = zeros(1, nbus);
Qg = zeros(1, nbus);

for i = 1:nbus

    if bcode(i) ~= 0
        lambdap(i) = (Pdem + lamiter1) / lamiter2;
        lambdaq(i) = 0;
        Pg(i) = (lambdap(i) - Bcost(i)) / (2 * Acost(i));
        Qg(i) = Pg(i) * Qdem / Pdem;
    elseif bcode(i) == 0
        lambdap(i) = 0;
        lambdaq(i) = 0;
        Pg(i) = 0;
        Qg(i) = 0;
    end

end % Pg;Qg;--are correct

% =========================================================================
% Iterative Loop starts
% =========================================================================
% Pg, del,V,lambdap,lambdaq

iter = 0;
maxerror = 1;

while maxerror >= accuracy && iter <= maxiter % While loop starts

    iter = iter + 1;

    Pcal = zeros(1, nbus);
    Qcal = zeros(1, nbus); % Real and Reactive power flow equations

    for iii = 1:nbus

        for jjj = 1:nbus
            Pcal(iii) = Pcal(iii) + V(iii) * V(jjj) * (G(iii, jjj) * cos(Ang(iii) - Ang(jjj)) + B(iii, jjj) * sin(Ang(iii) - Ang(jjj)));
            Qcal(iii) = Qcal(iii) + V(iii) * V(jjj) * (G(iii, jjj) * sin(Ang(iii) - Ang(jjj)) - B(iii, jjj) * cos(Ang(iii) - Ang(jjj)));
        end

    end % Pcal=Pcal'; Qcal=Qcal'

    Psp = zeros(1, nbus);
    Qsp = zeros(1, nbus);
    P = zeros(1, nbus);
    Q = zeros(1, nbus);

    for i = 1:nbus
        Psp(i) = Pg(i) - PD(i);
        Qsp(i) = Qg(i) - QD(i);
        P(i) = Pcal(i);
        Q(i) = Qcal(i);
    end % Psp;Qsp; P; Q;

    if iter == 1
        disp Initialization
        head = [
            '    Bus  Voltage  Angle    -----Load (p.u)---  ---Gen(p.u)--    Calcul_Power              Lambda          '
            '    No.  Mag.     Degree     PD        QD      PG       QG       Pcal      Qcal      LambdaP      LambdaQ '
            '                                                                                                          '
            ];
        disp(head)

        for n = 1:nbus
            fprintf(' %5g', n),
            fprintf(' %7.3f', V(n)),
            fprintf(' %8.3f', Ang(n)),
            fprintf(' %9.3f', PD(n)),
            fprintf(' %9.3f', QD(n)),
            fprintf(' %9.6f', Pg(n)),
            fprintf(' %9.6f ', Qg(n)),
            fprintf(' %9.6f ', Pcal(n)),
            fprintf(' %8.6f', Qcal(n)),
            fprintf('   %9.6f ', lambdap(n)),
            fprintf(' %8.6f\n', lambdaq(n))
        end

    end

    % Solve the equation [H][DX]=-[J] and find [DX]
    % =========================================================================
    % (Mismatch) Jacobian [J] size (1x9) matrix for 3 bus system
    % dL/dpgi,% ...i=1,2,3,...NB==============================================
    xxx1 = zeros(1, ng + ns);

    for i = 1:ns + ng
        xxx1(i) = 2 * Acost(i) * Pg(i) + Bcost(i) - lambdap(i);
    end

    DLDPG = xxx1'; %xxx1 ----variable mismatch===dldpg

    % dL/ddeli, ...i=2,3,...NB================================================
    dd11 = zeros(1, nbus);
    dd12 = zeros(1, nbus);
    qq11 = zeros(1, nbus);
    qq12 = zeros(1, nbus);

    for k = 1:nbus

        if bcode(k) ~= 1

            for i = 1:nbus

                if i ~= k
                    dd11(k) = dd11(k) + lambdap(i) * V(i) * V(k) * (G(i, k) * sin(Ang(i) - Ang(k)) - B(i, k) * cos(Ang(i) - Ang(k)));

                    if bcode(i) == 0
                        qq11(k) = qq11(k) + lambdaq(i) * V(i) * V(k) * (-G(i, k) * cos(Ang(i) - Ang(k)) - B(i, k) * sin(Ang(i) - Ang(k))); % Error identified
                    end

                elseif i == k

                    for s = 1:nbus

                        if k ~= s
                            dd12(k) = dd12(k) + lambdap(k) * V(k) * V(s) * (-G(k, s) * sin(Ang(k) - Ang(s)) + B(k, s) * cos(Ang(k) - Ang(s)));

                            if bcode(k) == 0
                                qq12(k) = qq12(k) + lambdaq(k) * V(k) * V(s) * (G(k, s) * cos(Ang(k) - Ang(s)) + B(k, s) * sin(Ang(k) - Ang(s))); % Error identified two cos terms are identified
                            end

                        end

                    end

                end

            end

        end

    end

    xxx2 = dd11 + qq11 + dd12 + qq12; % i=2,3,...NB
    DLDDEL = xxx2(:, 2:nbus)'; %dLddel

    % dL/dVi, ...i=NV+1,NV+2,...NB
    pv11 = zeros(1, nbus);
    pv12 = zeros(1, nbus);
    qv11 = zeros(1, nbus);
    qv12 = zeros(1, nbus);

    for k = 1:nbus

        if bcode(k) == 0

            for i = 1:nbus

                if i ~= k
                    pv11(k) = pv11(k) + lambdap(i) * V(i) * (G(i, k) * cos(Ang(i) - Ang(k)) + B(i, k) * sin(Ang(i) - Ang(k)));

                    if bcode(i) == 0
                        qv11(k) = qv11(k) + lambdaq(i) * V(i) * (G(i, k) * sin(Ang(i) - Ang(k)) - B(i, k) * cos(Ang(i) - Ang(k))); % i,k error rectified
                    end

                elseif i == k

                    for s = 1:nbus

                        if k ~= s
                            pv12(k) = pv12(k) + lambdap(k) * V(s) * (G(k, s) * cos(Ang(k) - Ang(s)) + B(k, s) * sin(Ang(k) - Ang(s)));
                            qv12(k) = qv12(k) + lambdaq(k) * V(s) * (G(k, s) * sin(Ang(k) - Ang(s)) - B(k, s) * cos(Ang(k) - Ang(s)));
                        elseif k == s
                            pv12(k) = pv12(k) + lambdap(k) * 2 * V(k) * G(k, k);
                            qv12(k) = qv12(k) - lambdaq(k) * 2 * V(k) * B(k, k);
                        end

                    end

                end

            end

        end

    end

    xxx3 = pv11 + qv11 + pv12 + qv12; % i=NV+1,NV+2,...NB
    DLDV = xxx3(:, ns + ng + 1:nbus)'; % dLdv

    % dL/dlamPi, ...i=1,2,3,...NB
    xxx5 = zeros(1, nbus);
    xxx4 = zeros(1, nbus);
    % dLdlamQ=zeros(1,nbus);
    for i = 1:nbus
        xxx5(i) = P(i) - Pg(i) + PD(i);
    end

    DLDLAMP = xxx5'; %dLdlamP

    % dL/dlamQi, ...i=NV+1,NV+2,...NB
    for k = 1:nbus

        if bcode(k) == 0
            xxx4(k) = Q(k) - Qg(k) + QD(k);
        end

    end

    DLDLAMQ = xxx4(:, ns + ng + 1:nbus)'; %dLdlamQ

    %State Variables [Dpg,Ddel,DV,DLamP,DLamQ]
    JACOBIAN =- [DLDPG; DLDDEL; DLDV; DLDLAMP; DLDLAMQ]

    % Example:-Variable [DX] is size [1x9] matrix for 3 bus system [H][DX]=-[J]
    % =========================================================================
    % Solve the equation [H][DX]=-[J] and find [DX]====% H=[ d2Ldpg  d2Lddel d2Ldv d2LdlamP d2LdlamQ];
    % Hessian [H] Matrix Element computation % Example for 3 bus system [H] size is (9x9) matrix
    % =========================================================================
    %  HPGPG		HPGDEL	  HPGDV     HPGLAMP     HPGLAMQ
    %  HDELPG		HDEL	  HDELDV    HDELLAMP	HDELLAMQ
    %  HDVPG		HDVDEL	  HDVDV	    HDVLAMP		HDVLAMQ
    %  HLAMPPG		HLAMPDEL  HLAMPDV	HLAMPP      HLAMPQ
    %  HLAMQPG		HLAMQDEL  HLAMQDV	HLAMQP      HLAMQQ
    % =========================================================================
    HPGPG = zeros(ng + ns);
    HPGDEL = zeros(ng + ns);
    HPGDV = zeros(ng + ns);
    HPGLAMP = zeros(ng + ns);
    HPGLAMQ = zeros(ng + ns);

    for ii = 1:nbus

        if bcode(ii) ~= 0

            for jj = 1:nbus

                if bcode(jj) ~= 0

                    if ii == jj
                        HPGPG(ii, jj) = 2 * Acost(ii);
                    elseif ii ~= jj
                        HPGPG(ii, jj) = 0;
                    end

                end

                if bcode(jj) ~= 1

                    if ii == jj
                        HPGDEL(ii, jj) = 0;
                    elseif ii ~= jj
                        HPGDEL(ii, jj) = 0;
                    end

                end

                if ii == jj
                    HPGLAMP(ii, jj) = -1;
                elseif ii ~= jj
                    HPGLAMP(ii, jj) = 0;
                end

                if bcode(jj) == 0

                    if ii == jj
                        HPGDV(ii, jj) = 0;
                        HPGLAMQ(ii, jj) = 0;
                    elseif ii ~= jj
                        HPGDV(ii, jj) = 0;
                        HPGLAMQ(ii, jj) = 0;
                    end

                end

            end

        end

    end

    HPGDEL = HPGDEL(:, 2:nbus);
    HPGDV = HPGDV(:, ns + ng + 1:nbus);
    HPGLAMQ = HPGLAMQ(:, ns + ng + 1:nbus);

    YY1 = [HPGPG HPGDEL HPGDV HPGLAMP	HPGLAMQ]; %==== HESSIAN===FIRST_ROW

    %==========================================================================
    % HDELPG	HDEL	 HDELLAMP	HDELDV	HDELLAMQ ===HESSIAN===SCEOND_ROW===

    HDELPG = zeros(nbus, nbus);
    HDEL = zeros(nbus, nbus);
    HDELDV = zeros(nbus, nbus);
    HDELLAMP = zeros(nbus, nbus);
    HDELLAMQ = zeros(nbus, nbus);

    for ii = 1:nbus

        if bcode(ii) ~= 1

            for kk = 1:nbus

                if bcode(kk) ~= 1
                    HDELPG(ii, kk) = 0;
                end

            end

        end

    end

    HDELPS = zeros(1, nbus);
    HDELSQ = zeros(1, nbus);
    HPPP = 0;
    HDELOFFP1 = zeros(1, nbus);
    HDELOFFQ2 = zeros(1, nbus);
    %Calculation of Self and Mutual Term of HDEL  % Generalized code
    for ii = 1:nbus

        if bcode(ii) ~= 1

            for kk = 1:nbus

                if bcode(kk) ~= 1

                    if ii == kk

                        for jj = 1:nbus

                            if jj ~= kk
                                HDELPS(jj) = -lambdap(jj) * V(jj) * V(kk) * (G(jj, kk) * cos(Ang(jj) - Ang(kk)) + B(jj, kk) * sin(Ang(jj) - Ang(kk)));

                                if bcode(jj) == 0
                                    HDELSQ(jj) = lambdaq(jj) * V(jj) * V(kk) * (-G(jj, kk) * cos(Ang(jj) - Ang(kk)) + B(jj, kk) * sin(Ang(jj) - Ang(kk)));
                                end

                            elseif jj == kk

                                for ss = 1:nbus

                                    if ss ~= kk
                                        HPPP = HPPP + V(kk) * V(ss) * (-G(kk, ss) * cos(Ang(kk) - Ang(ss)) + B(kk, ss) * sin(Ang(kk) - Ang(ss)));
                                    end

                                end

                                HDELPS(jj) = HPPP * lambdap(jj);
                            end

                        end

                        HDEL(ii, kk) = sum(HDELPS) + sum(HDELSQ);
                    end

                    if ii ~= kk

                        for jj = 1:nbus

                            if bcode(kk) == 2 || bcode(kk) == 0

                                if ii == jj
                                    HDELOFFP1(jj) = lambdap(jj) * V(ii) * V(kk) * (G(ii, kk) * cos(Ang(ii) - Ang(kk)) + B(ii, kk) * sin(Ang(ii) - Ang(kk)));
                                end

                                if kk == jj
                                    HDELOFFP1(jj) = lambdap(jj) * V(kk) * V(ii) * (G(kk, ii) * cos(Ang(kk) - Ang(ii)) + B(kk, ii) * sin(Ang(kk) - Ang(ii)));
                                end

                                if bcode(jj) == 0

                                    if jj == ii
                                        HDELOFFQ2(jj) = lambdaq(jj) * V(ii) * V(kk) * (G(ii, kk) * sin(Ang(ii) - Ang(kk)) - B(ii, kk) * cos(Ang(ii) - Ang(kk)));
                                    end

                                    if jj == kk
                                        HDELOFFQ2(jj) = lambdaq(jj) * V(kk) * V(ii) * (G(kk, ii) * sin(Ang(kk) - Ang(ii)) - B(kk, ii) * cos(Ang(kk) - Ang(ii)));
                                    end

                                end

                            end

                        end

                        HDEL(ii, kk) = sum(HDELOFFP1) + sum(HDELOFFQ2);
                    end

                end

            end

        end

        HDELPS = zeros(1, nbus);
        HDELSQ = zeros(1, nbus);
        hs = 0;
        HDELOFFP1 = zeros(1, nbus);
        HDELOFFQ2 = zeros(1, nbus);
    end

    HDELP12 = zeros(1, nbus);
    HDELQ12 = zeros(1, nbus);
    HDELP22 = zeros(1, nbus);
    HDELQ22 = zeros(1, nbus);
    HDELP33 = zeros(1, nbus);
    HDELQ33 = zeros(1, nbus);
    SAMTQ = 0; SAMTOT = 0;

    for ii = 1:nbus

        if bcode(ii) ~= 1

            for kk = 1:nbus

                if bcode(kk) == 0

                    if ii ~= kk

                        for ss = 1:nbus

                            if ss == ii
                                HDELP12(ss) = lambdap(ii) * V(ii) * (-G(ii, kk) * sin(Ang(ii) - Ang(kk)) + B(ii, kk) * cos(Ang(ii) - Ang(kk)));
                            end

                            if ss == kk
                                HDELP12(ss) = lambdap(kk) * V(ii) * (G(kk, ii) * sin(Ang(kk) - Ang(ii)) - B(kk, ii) * cos(Ang(kk) - Ang(ii)));
                            end

                            if bcode(ss) == 0

                                if ss == kk
                                    HDELQ12(ss) = lambdaq(kk) * V(ii) * (-G(kk, ii) * cos(Ang(kk) - Ang(ii)) - B(kk, ii) * sin(Ang(kk) - Ang(ii)));
                                end

                            end

                        end

                        HDELDV(ii, kk) = sum(HDELP12) + sum(HDELQ12);
                    end

                    if ii == kk

                        for nn = 1:nbus

                            if nn ~= kk
                                HDELP22(nn) = lambdap(nn) * V(nn) * (G(nn, ii) * sin(Ang(nn) - Ang(ii)) - B(nn, ii) * cos(Ang(nn) - Ang(ii)));

                                if bcode(nn) == 0
                                    HDELQ22(nn) = lambdaq(nn) * V(nn) * (-G(nn, ii) * cos(Ang(nn) - Ang(ii)) - B(nn, ii) * sin(Ang(nn) - Ang(ii)));
                                end

                            elseif nn == kk

                                for ff = 1:nbus

                                    if ff ~= kk
                                        SAMTOT = SAMTOT + V(ff) * (-G(kk, ff) * sin(Ang(kk) - Ang(ff)) + B(kk, ff) * cos(Ang(kk) - Ang(ff))); % Error Identified and corrected 've'
                                        SAMTQ = SAMTQ + V(ff) * (G(kk, ff) * cos(Ang(kk) - Ang(ff)) + B(kk, ff) * sin(Ang(kk) - Ang(ff)));
                                    end

                                end

                                HDELP33(nn) = lambdap(nn) * SAMTOT;
                                HDELQ33(nn) = lambdaq(nn) * SAMTQ;
                            end

                        end

                        HDELDV(ii, kk) = sum(HDELP22) + sum(HDELQ22) + sum(HDELP33) + sum(HDELQ33);
                    end

                end

            end

            HDELP12 = zeros(1, nbus);
            HDELQ12 = zeros(1, nbus);
            HDELP22 = zeros(1, nbus);
            HDELQ22 = zeros(1, nbus);
            HDELP33 = zeros(1, nbus);
            HDELQ33 = zeros(1, nbus);
            SAMTQ = 0; SAMTOT = 0;
        end

    end

    HDELLAMPA = 0; HDELLAMQA = 0;

    for iii = 1:nbus

        if bcode(iii) ~= 1

            for jjj = 1:nbus

                if iii ~= jjj
                    HDELLAMP(iii, jjj) = V(jjj) * V(iii) * (G(jjj, iii) * sin(Ang(jjj) - Ang(iii)) - B(jjj, iii) * cos(Ang(jjj) - Ang(iii)));

                    if bcode(jjj) == 0
                        HDELLAMQ(iii, jjj) = V(jjj) * V(iii) * (-G(jjj, iii) * cos(Ang(jjj) - Ang(iii)) - B(jjj, iii) * sin(Ang(jjj) - Ang(iii)));
                    end

                elseif iii == jjj

                    for kkk = 1:nbus

                        if iii ~= kkk
                            HDELLAMPA = HDELLAMPA + V(iii) * V(kkk) * (-G(iii, kkk) * sin(Ang(iii) - Ang(kkk)) + B(iii, kkk) * cos(Ang(iii) - Ang(kkk)));

                            if bcode(jjj) == 0
                                HDELLAMQA = HDELLAMQA + V(jjj) * V(kkk) * (G(jjj, kkk) * cos(Ang(jjj) - Ang(kkk)) + B(jjj, kkk) * sin(Ang(jjj) - Ang(kkk)));
                            end

                        end

                    end

                    HDELLAMP(iii, jjj) = HDELLAMPA;
                    HDELLAMQ(iii, jjj) = HDELLAMQA;
                end

            end

            HDELLAMPA = 0; HDELLAMQA = 0;
        end

    end

    YYY1 = HDELPG (2:nbus, 2:nbus);
    YYY2 = HDEL (2:nbus, 2:nbus);
    YYY3 = HDELDV (2:nbus, ns + ng + 1:nbus); % Error Identified
    YYY4 = HDELLAMP(2:nbus, :);
    YYY5 = HDELLAMQ(2:nbus, ns + ng + 1:nbus);

    % ====HESSIAN==MATRIX===============END OF SECOND_ROW======================

    %  HDELPG	HDEL HDELDV   HDELLAMP HDELLAMQ
    % AAA2=[ HDELPG	HDEL HDELDV   HDELLAMP HDELLAMQ]%====HESSIAN===SECOND_ROW

    YY2 = [YYY1 YYY2 YYY3 YYY4 YYY5];

    % ====HESSIAN==MATRIX=============================THIRD_ROW
    % HDVPG		HDVDEL	  HDVDV	    HDVLAMP		HDVLAMQ
    HDVPG = zeros(nbus, nbus);
    HDVDEL = zeros(nbus, nbus);
    HDVDV = zeros(nbus, nbus);
    HDVLAMP = zeros(nbus, nbus);
    HDVLAMQ = zeros(nbus, nbus);

    for iii = 1:nbus

        if bcode(iii) == 0

            for jjj = 1:nbus

                if bcode(jjj) == 1 || bcode(jjj) == 2
                    HDVPG(iii, jjj) = 0;
                end

            end

        end

    end

    HDVP12 = zeros(1, nbus);
    HDVQ12 = zeros(1, nbus);
    HDVP22 = zeros(1, nbus);
    HDVQ22 = zeros(1, nbus);
    HDVP33 = zeros(1, nbus);
    HDVQ33 = zeros(1, nbus);
    SUMDVP = 0; SUMDVQ = 0;

    for ii = 1:nbus

        if bcode(ii) == 0

            for kk = 1:nbus

                if bcode(kk) ~= 1

                    if ii ~= kk

                        for ss = 1:nbus

                            if ss == ii
                                HDVP12(ss) = lambdap(ii) * V(kk) * (G(ii, kk) * sin(Ang(ii) - Ang(kk)) - B(ii, kk) * cos(Ang(ii) - Ang(kk))); % "lambda" error identified and corrected
                            end

                            if ss == kk
                                HDVP12(ss) = lambdap(kk) * V(kk) * (-G(kk, ii) * sin(Ang(kk) - Ang(ii)) + B(kk, ii) * cos(Ang(kk) - Ang(ii))); % "-ve sign" error identified and corrected
                            end

                            if bcode(ss) == 0

                                if ss == ii
                                    HDVQ12(ss) = lambdaq(ii) * V(kk) * (-G(ii, kk) * cos(Ang(ii) - Ang(kk)) - B(ii, kk) * sin(Ang(ii) - Ang(kk)));
                                end

                            end

                        end

                        HDVDEL(ii, kk) = sum(HDVP12) + sum(HDVQ12);
                    end

                    if ii == kk

                        for nn = 1:nbus

                            if nn ~= kk
                                HDVP22(nn) = lambdap(nn) * V(nn) * (G(nn, ii) * sin(Ang(nn) - Ang(ii)) - B(nn, ii) * cos(Ang(nn) - Ang(ii))); % Errors identified and corrected

                                if bcode(nn) == 0
                                    HDVQ22(nn) = lambdaq(nn) * V(nn) * (-G(nn, ii) * cos(Ang(nn) - Ang(ii)) - B(nn, ii) * sin(Ang(nn) - Ang(ii)));
                                end

                            elseif nn == kk

                                for ff = 1:nbus

                                    if ff ~= kk
                                        SUMDVP = SUMDVP + V(ff) * (-G(kk, ff) * sin(Ang(kk) - Ang(ff)) + B(kk, ff) * cos(Ang(kk) - Ang(ff)));
                                        SUMDVQ = SUMDVQ + V(ff) * (G(kk, ff) * cos(Ang(kk) - Ang(ff)) + B(kk, ff) * sin(Ang(kk) - Ang(ff)));
                                    end

                                end

                                HDVP33(nn) = lambdap(nn) * SUMDVP;
                                HDVQ33(nn) = lambdaq(nn) * SUMDVQ;
                            end

                        end

                        HDVDEL(ii, kk) = sum(HDVP22) + sum(HDVQ22) + sum(HDVP33) + sum(HDVQ33);
                    end

                end

            end

            HDVP12 = zeros(1, nbus);
            HDVQ12 = zeros(1, nbus);
            HDVP22 = zeros(1, nbus);
            HDVQ22 = zeros(1, nbus);
            HDVP33 = zeros(1, nbus);
            HDVQ33 = zeros(1, nbus);
            SUMDVP = 0; SUMDVQ = 0;
        end

    end

    HDVDVP12 = zeros(1, nbus);
    HDVDVQ12 = zeros(1, nbus);
    HDVDVP = zeros(1, nbus);
    HDVDVQ = zeros(1, nbus);

    for ii = 1:nbus

        if bcode(ii) == 0

            for kk = 1:nbus

                if bcode(kk) == 0

                    if ii ~= kk

                        for ss = 1:nbus

                            if ss == ii
                                HDVDVP12(ss) = lambdap(ii) * (G(ii, kk) * cos(Ang(ii) - Ang(kk)) + B(ii, kk) * sin(Ang(ii) - Ang(kk)));
                                HDVDVQ12(ss) = lambdaq(ii) * (G(ii, kk) * sin(Ang(ii) - Ang(kk)) - B(ii, kk) * cos(Ang(ii) - Ang(kk)));
                            end

                            if ss == kk
                                HDVDVP12(ss) = lambdap(kk) * (G(kk, ii) * cos(Ang(kk) - Ang(ii)) + B(kk, ii) * sin(Ang(kk) - Ang(ii)));
                                HDVDVQ12(ss) = lambdaq(kk) * (G(kk, ii) * sin(Ang(kk) - Ang(ii)) - B(kk, ii) * cos(Ang(kk) - Ang(ii)));
                            end

                        end

                        HDVDV(ii, kk) = sum(HDVDVP12) + sum(HDVDVQ12);
                    end

                    if ii == kk

                        for nn = 1:nbus

                            if nn == kk
                                HDVDVP(nn) = lambdap(nn) * 2 * G(nn, ii);
                                HDVDVQ(nn) = lambdaq(nn) * 2 * -B(nn, ii);
                            end

                        end

                        HDVDV(ii, kk) = sum(HDVDVP) + sum(HDVDVQ);
                    end

                end

            end

            HDVDVP12 = zeros(1, nbus);
            HDVDVQ12 = zeros(1, nbus);
            HDVDVP = zeros(1, nbus);
            HDVDVQ = zeros(1, nbus);
        end

    end

    HDVLAMPA = 0;
    HDVLAMQA = 0;

    for iii = 1:nbus

        if bcode(iii) == 0

            for jjj = 1:nbus

                if iii ~= jjj
                    HDVLAMP(iii, jjj) = V(jjj) * (G(jjj, iii) * cos(Ang(jjj) - Ang(iii)) + B(jjj, iii) * sin(Ang(jjj) - Ang(iii)));

                    if bcode(jjj) == 0
                        HDVLAMQ(iii, jjj) = V(jjj) * (G(jjj, iii) * sin(Ang(jjj) - Ang(iii)) - B(jjj, iii) * cos(Ang(jjj) - Ang(iii)));
                    end

                elseif iii == jjj

                    for kkk = 1:nbus

                        if iii ~= kkk
                            HDVLAMPA = HDVLAMPA + V(kkk) * (G(jjj, kkk) * cos(Ang(jjj) - Ang(kkk)) + B(jjj, kkk) * sin(Ang(jjj) - Ang(kkk)));
                            HDVLAMQA = HDVLAMQA + V(kkk) * (G(jjj, kkk) * sin(Ang(jjj) - Ang(kkk)) - B(jjj, kkk) * cos(Ang(jjj) - Ang(kkk)));
                        elseif iii == kkk
                            HDVLAMPA = HDVLAMPA + 2 * V(kkk) * G(iii, kkk);
                            HDVLAMQA = HDVLAMQA - 2 * V(kkk) * B(iii, kkk); %Error identified and corrected
                        end

                    end

                    HDVLAMP(iii, jjj) = HDVLAMPA;
                    HDVLAMQ(iii, jjj) = HDVLAMQA;
                end

            end

            HDVLAMPA = 0; HDELLAMQA = 0;
        end

    end

    XXX1 = HDVPG(ns + ng + 1:nbus, 2:nbus);
    XXX2 = HDVDEL(ns + ng + 1:nbus, 2:nbus);
    XXX3 = HDVDV((ns + ng + 1):nbus, (ns + ng + 1):nbus);
    XXX4 = HDVLAMP((ns + ng + 1):nbus, :);
    XXX5 = HDVLAMQ((ns + ng + 1):nbus, (ns + ng + 1):nbus);

    % AAA3=[ HDVPG HDVDEL	  HDVDV	  HDVLAMP	HDVLAMQ]%====HESSIAN===THIRD_ROW

    YY3 = [XXX1 XXX2 XXX3 XXX4	XXX5]; %====HESSIAN===THIRD_ROW

    %HLAMPPG HLAMPDEL  HLAMPDV	HLAMP	HLAMPQ%====HESSIAN===FOURTH_ROW
    HLAMPPG = zeros(nbus, nbus);
    HLAMPDEL = zeros(nbus, nbus);
    HLAMPDV = zeros(nbus, nbus);
    HLAMPP = zeros(nbus, nbus);
    HLAMPQ = zeros(nbus, nbus);

    for iii = 1:nbus

        for jjj = 1:nbus

            if iii == jjj
                HLAMPPG(iii, jjj) = -1;
            end

        end

    end

    HLAMPDELA = 0;

    for iii = 1:nbus

        for jjj = 1:nbus

            if bcode(jjj) ~= 1

                if iii ~= jjj %Error Identified and corrected  (iii---- jjj) interchanged
                    HLAMPDEL(iii, jjj) = V(iii) * V(jjj) * (G(iii, jjj) * sin(Ang(iii) - Ang(jjj)) - B(iii, jjj) * cos(Ang(iii) - Ang(jjj)));
                elseif iii == jjj

                    for kkk = 1:nbus

                        if iii ~= kkk
                            HLAMPDELA = HLAMPDELA + V(iii) * V(kkk) * (-G(iii, kkk) * sin(Ang(iii) - Ang(kkk)) + B(iii, kkk) * cos(Ang(iii) - Ang(kkk)));
                        end

                    end

                    HLAMPDEL(iii, jjj) = HLAMPDELA;
                end

            end

        end

        HLAMPDELA = 0;
    end

    HLAMPDVA = 0;

    for iii = 1:nbus

        for jjj = 1:nbus

            if bcode(jjj) == 0

                if iii ~= jjj
                    HLAMPDV(iii, jjj) = V(iii) * (G(iii, jjj) * cos(Ang(iii) - Ang(jjj)) + B(iii, jjj) * sin(Ang(iii) - Ang(jjj)));
                elseif iii == jjj

                    for kkk = 1:nbus

                        if kkk ~= iii
                            HLAMPDVA = HLAMPDVA + V(kkk) * (G(iii, kkk) * cos(Ang(iii) - Ang(kkk)) + B(iii, kkk) * sin(Ang(iii) - Ang(kkk)));
                        elseif kkk == iii
                            HLAMPDVA = HLAMPDVA + 2 * V(kkk) * G(iii, kkk);
                        end

                    end

                    HLAMPDV(iii, jjj) = HLAMPDVA;
                end

            end

        end

        HLAMPDVA = 0; %Error identified and corrected
    end

    for uuu = 1:nbus

        for vvv = 1:nbus
            HLAMPP(uuu, vvv) = 0;

            if bcode(vvv) == 0
                HLAMPQ(uuu, vvv) = 0;
            end

        end

    end

    ZZZ1 = HLAMPPG(:, 1:ng + ns);
    ZZZ2 = HLAMPDEL(:, 2:nbus); %Error identified and corrected
    ZZZ3 = HLAMPDV(:, ng + ns + 1);
    ZZZ4 = HLAMPP;
    ZZZ5 = HLAMPQ(:, ng + ns + 1);

    % AAA4=[ HLAMPPG	HLAMPDEL  HLAMPDV	HLAMPP	HLAMPQ]

    YY4 = [ZZZ1 ZZZ2 ZZZ3 ZZZ4 ZZZ5];

    %==================== HESSIAN MATRIX LAST ROW==============================
    %HLAMQPG HLAMQDEL  HLAMQDV	HLAMQP	HLAMQQ

    HLAMQPG = zeros(nbus, nbus);
    HLAMQDEL = zeros(nbus, nbus);
    HLAMQDV = zeros(nbus, nbus);
    HLAMQP = zeros(nbus, nbus);
    HLAMQQ = zeros(nbus, nbus);

    for uuu = 1:nbus

        if bcode(uuu) ~= 0

            for vvv = 1:nbus

                if bcode(vvv) == 0
                    HLAMQPG(uuu, vvv) = 0;
                end

            end

        end

    end

    % HLAMQPG
    HLAMQDELA = 0;

    for iii = 1:nbus

        if bcode(iii) == 0

            for jjj = 1:nbus

                if bcode(jjj) ~= 1

                    if iii ~= jjj
                        HLAMQDEL(iii, jjj) = V(iii) * V(jjj) * (-G(iii, jjj) * cos(Ang(iii) - Ang(jjj)) - B(iii, jjj) * sin(Ang(iii) - Ang(jjj)));
                    elseif iii == jjj

                        for kkk = 1:nbus

                            if kkk ~= iii
                                HLAMQDELA = HLAMQDELA + V(iii) * V(kkk) * (G(iii, kkk) * cos(Ang(iii) - Ang(kkk)) + B(iii, kkk) * sin(Ang(iii) - Ang(kkk)));
                            end

                        end

                        HLAMQDEL(iii, jjj) = HLAMQDELA;
                    end

                end

            end

            HLAMQDELA = 0;
        end

    end

    % HLAMQDEL

    HLAMQDVA = 0;

    for iii = 1:nbus

        if bcode(iii) == 0

            for jjj = 1:nbus

                if bcode(jjj) == 0

                    if iii ~= jjj %Error identified and corrected
                        HLAMQDV(iii, jjj) = V(iii) * (G(iii, jjj) * sin(Ang(iii) - Ang(jjj)) - B(iii, jjj) * cos(Ang(iii) - Ang(jjj)));
                    elseif iii == jjj

                        for kkk = 1:nbus

                            if kkk ~= iii
                                HLAMQDVA = HLAMQDVA + V(kkk) * (G(iii, kkk) * sin(Ang(iii) - Ang(kkk)) - B(iii, kkk) * cos(Ang(iii) - Ang(kkk)));
                            elseif iii == kkk
                                HLAMQDVA = HLAMQDVA - 2 * V(iii) * B(iii, kkk); %Error identified and corrected
                            end

                        end

                        HLAMQDV(iii, jjj) = HLAMQDVA;
                    end

                end

            end

            HLAMQDVA = 0;
        end

    end

    % HLAMQDV %Error identified and corrected

    MMM1 = HLAMQPG(ns + ng + 1:nbus, 2:nbus);
    MMM2 = HLAMQDEL(ns + ng + 1:nbus, 2:nbus);
    MMM3 = HLAMQDV((ns + ng + 1):nbus, (ns + ng + 1):nbus);
    MMM4 = HLAMQP((ns + ng + 1):nbus, :);
    MMM5 = HLAMQQ((ns + ng + 1):nbus, (ns + ng + 1):nbus);

    % AAA5=[HLAMQPG HLAMQDEL  HLAMQDV	HLAMQP	HLAMQQ] % LAST ROW OF HESSIAN MATRIX
    YY5 = [MMM1 MMM2 MMM3 MMM4 MMM5];

    disp 'Hessian Matrix'

    HMATRIX = [YY1; YY2; YY3; YY4; YY5]

    disp 'Mismatch Vector'

    DMISM = HMATRIX \ JACOBIAN

    disp ' Iterations '

    fprintf(' %3g ', iter)

    maxerror = sqrt(sum(DMISM .* DMISM))

    % variable updation
    % '********************************************************************'
    % Variables vector [Pg,Ang,V,lambdap,lambdaq]
    % ********************************************************************'
    for ii = 1:nbus

        if bcode(ii) ~= 0
            Pg(ii) = Pg(ii) + DMISM(ii);
        end

        if bcode(ii) ~= 1
            Ang(ii) = Ang(ii) + DMISM(ng + ns - 1 + ii);
        end

        if bcode(ii) == 0
            V(ii) = V(ii) + DMISM(nbus - 1 + ii);
        end

        lambdap(ii) = lambdap(ii) + DMISM(2 * nbus + ii - 1);

        if bcode(ii) == 0
            lambdaq(ii) = lambdaq(ii) + DMISM(3 * nbus - ng - ns + ii - 1);
        end

    end

    % ********************************************************************'
    if iter == maxiter && maxerror > accuracy
        fprintf('\nWARNING: Iterative solution did not converged after ')
        fprintf('%g', iter), fprintf(' iterations.\n\n')
        fprintf('Press Enter to terminate the iterations and print the results \n')
        converge = 0; pause
    end

end % End of While loop

% Total Cost computation

disp ' Total Cost'
FPg = zeros(1, nbus);
LAMPPP = zeros(1, nbus);
LAMQQQ = zeros(1, nbus);

for jjj = 1:nbus

    if bcode(jjj) ~= 0
        FPg(jjj) = Acost(jjj) * Pg(jjj)^2 + Bcost(jjj) * Pg(jjj) + Ccost(jjj);
    end

    LAMPPP(jjj) = lambdap(jjj) * (P(jjj) - Pg(jjj) + PD(jjj));

    if bcode(jjj) == 0
        LAMQQQ(jjj) = lambdaq(jjj) * (Q(jjj) - Qg(jjj) + QD(jjj));
    end

end

TCOST = sum(FPg) + sum(LAMPPP) + sum(LAMQQQ);

fprintf(' %5.6g \n\n', TCOST)

disp ' Iterations '

fprintf(' %3g \n', iter)

disp '************Bus Voltages, Real/Reactive Power and Lambda Real/Reactive*******************************************'

disp ' '
head = ['    Bus  Voltage  Angle    -----Load (p.u)---  ---Gen(p.u)--    Calcul_Power---        ---Lambda---       '
    '    No.  Mag.     Radian     PD        QD      PG       QG       Pcal      Qcal      LambdaP      LambdaQ '
    '                                                                                                          '];
disp(head)

for n = 1:nbus
    fprintf(' %5g', n),
    fprintf(' %7.5f', V(n)),
    fprintf(' %8.5f', Ang(n)),
    fprintf(' %9.5f', PD(n)),
    fprintf(' %9.5f', QD(n)),
    fprintf(' %9.6f', Pg(n)),
    fprintf(' %9.6f ', Qg(n)),
    fprintf(' %9.6f ', Pcal(n)),
    fprintf(' %8.6f', Qcal(n)),
    fprintf('   %9.6f ', lambdap(n)),
    fprintf(' %8.6f\n', lambdaq(n))
end

Pgd = zeros(1, nbus);
Qgd = zeros(1, nbus);
S = zeros(1, nbus);

for n = 1:nbus
    Pgd(n) = (Pg(n) - PD(n));
    Qgd(n) = (Qg(n) - QD(n)); %+ Qsh(n))
    S(n) = Pgd(n) + j * Qgd(n);
end

Vc = V .* (cos(Ang) + j * sin(Ang));
%                            Line Flow and Losses
SLT = 0;
fprintf('\n')
fprintf('                           Line Flow and Losses \n\n')
fprintf('     --Line--  Power at bus & line flow    --Line loss--  Transformer\n')
fprintf('     from  to    MW      Mvar     MVA       MW      Mvar      tap\n')

for n = 1:nbus
    busprt = 0;

    for L = 1:nbr;

        if busprt == 0
            fprintf('   \n'),
            fprintf('%6g', n),
            fprintf('      %9.3f', Pgd(n) * basemva)
            fprintf('%9.3f', Qgd(n) * basemva),
            fprintf('%9.3f\n', abs(S(n) * basemva))
            busprt = 1;
        else
        end

        if sb(L) == n
            k = eb(L);
            In = (Vc(n) - tap(L) * Vc(k)) * y(L) / tap(L)^2 + b(L) / tap(L)^2 * Vc(n);
            Ik = (Vc(k) - Vc(n) / tap(L)) * y(L) + b(L) * Vc(k);
            Snk = Vc(n) * conj(In) * basemva;
            Skn = Vc(k) * conj(Ik) * basemva;
            SL = Snk + Skn;
            SLT = SLT + SL;
        elseif eb(L) == n k = sb(L);
            In = (Vc(n) - Vc(k) / tap(L)) * y(L) + b(L) * Vc(n);
            Ik = (Vc(k) - tap(L) * Vc(n)) * y(L) / tap(L)^2 + b(L) / tap(L)^2 * Vc(k);
            Snk = Vc(n) * conj(In) * basemva;
            Skn = Vc(k) * conj(Ik) * basemva;
            SL = Snk + Skn;
            SLT = SLT + SL;
        else
        end

        if sb(L) == n || eb(L) == n
            fprintf('%12g', k),
            fprintf('%9.3f', real(Snk)),
            fprintf('%9.3f', imag(Snk))
            fprintf('%9.3f', abs(Snk)),
            fprintf('%9.3f', real(SL)),

            if sb(L) == n && tap(L) ~= 1
                fprintf('%9.3f', imag(SL)), fprintf('%9.3f\n', tap(L))
            else
                fprintf('%9.3f\n', imag(SL))
            end

        else
        end

    end

end

SLT = SLT / 2;
fprintf('   \n'),
fprintf('    Total loss                         ')
fprintf('%9.3f', real(SLT)),
fprintf('%9.3f\n', imag(SLT))
clear Ik In SL SLT Skn Snk
%===================END OF HESSIAN MATRIX FORMATION=============================
disp '***************************************************************************************************************'
disp 'Run Completed Successfully'
