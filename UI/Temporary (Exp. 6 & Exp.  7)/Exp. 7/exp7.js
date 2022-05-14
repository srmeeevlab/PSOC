% Line Data for B-Bus (Shunt Admittance)Formation.

function bbus = bbusppg(num)     % Returns B-bus..

linedata = linedatas(num);
fb = linedata(:,1);
tb = linedata(:,2);
b = linedata(:,5);
nbus = max(max(fb),max(tb));    % no. of buses...
nbranch = length(fb);           % no. of branches...
bbus = zeros(nbus,nbus);

 for k=1:nbranch
     bbus(fb(k),tb(k)) = b(k);
     bbus(tb(k),fb(k)) = bbus(fb(k),tb(k));
 end
 function busdt = busdatas(num)


%         |Bus | Type | Vsp | theta | PGi | QGi | PLi | QLi |  Qmin | Qmax |
busdata3=[  1     1    1.006   0       0     0     0     0      0      0;
            2     2    1.01   0      40   42.4  0.0   0.0      0      0;
            3     3    1.00   0       0   00  0.0     0.0      0      0;];

busdata14 = [ 1     1    1.060   0       0     0     0     0       0       0;
            2     2    1.045   0      40   42.4  21.7   12.7    -40     50;
            3     2    1.010   0       0   23.4  94.2   19.0     0      40;
            4     3    1.0     0       0     0   47.8   -3.9     0       0;
            5     3    1.0     0       0     0    7.6    1.6     0       0;
            6     2    1.070   0       0   12.2  11.2    7.5    -6      24;
            7     3    1.0     0       0     0    0.0    0.0     0       0;
            8     2    1.090   0       0   17.4   0.0    0.0    -6      24;
            9     3    1.0     0       0     0   29.5   16.6     0       0;
            10    3    1.0     0       0     0    9.0    5.8     0       0;
            11    3    1.0     0       0     0    3.5    1.8     0       0;
            12    3    1.0     0       0     0    6.1    1.6     0       0;
            13    3    1.0     0       0     0   13.5    5.8     0       0;
            14    3    1.0     0       0     0   14.9    5.0     0       0;];
        
 %         |Bus | Type | Vsp | theta | PGi | QGi | PLi | QLi |  Qmin | Qmax |
busdata30 = [ 1     1    1.06    0       0     0     0     0       0       0;
            2     2    1.043   0      40   50.0  21.7   12.7    -40     50;
            3     3    1.0     0       0     0    2.4    1.2     0       0;
            4     3    1.06    0       0     0    7.6    1.6     0       0;
            5     2    1.01    0       0   37.0  94.2   19.0    -40     40;
            6     3    1.0     0       0     0    0.0    0.0     0       0;
            7     3    1.0     0       0     0   22.8   10.9     0       0;
            8     2    1.01    0       0   37.3  30.0   30.0    -10     40;
            9     3    1.0     0       0     0    0.0    0.0     0       0;
            10    3    1.0     0       0     0    5.8    2.0     0       0;
            11    2    1.082   0       0   16.2   0.0    0.0    -6      24;
            12    3    1.0     0       0     0   11.2    7.5     0       0;
            13    2    1.071   0       0   10.6   0.0    0.0    -6      24;
            14    3    1.0     0       0     0    6.2    1.6     0       0;
            15    3    1.0     0       0     0    8.2    2.5     0       0;
            16    3    1.0     0       0     0    3.5    1.8     0       0;
            17    3    1.0     0       0     0    9.0    5.8     0       0;
            18    3    1.0     0       0     0    3.2    0.9     0       0;
            19    3    1.0     0       0     0    9.5    3.4     0       0;
            20    3    1.0     0       0     0    2.2    0.7     0       0;
            21    3    1.0     0       0     0   17.5   11.2     0       0;
            22    3    1.0     0       0     0    0.0    0.0     0       0;
            23    3    1.0     0       0     0    3.2    1.6     0       0;
            24    3    1.0     0       0     0    8.7    6.7     0       0;
            25    3    1.0     0       0     0    0.0    0.0     0       0;
            26    3    1.0     0       0     0    3.5    2.3     0       0;
            27    3    1.0     0       0     0    0.0    0.0     0       0;
            28    3    1.0     0       0     0    0.0    0.0     0       0;
            29    3    1.0     0       0     0    2.4    0.9     0       0;
            30    3    1.0     0       0     0   10.6    1.9     0       0 ];
        
switch num
    case 3
        busdt = busdata3;
    case 14
        busdt = busdata14;
    case 30
        busdt = busdata30;
end
function busdt = busdatas(num)


%         |Bus | Type | Vsp | theta | PGi | QGi | PLi | QLi |  Qmin | Qmax |
busdata3=[  1     1    1.006   0       0     0     0     0      0      0;
            2     2    1.00    0      0   0.0  0.0   0.0      0      0;
            3     3    1.00   0       0   00  0.0     0.0      0      0;];

busdata14 = [ 1     1    1.060   0       0     0     0     0       0       0;
            2     2    1.045   0      40   42.4  21.7   12.7    -40     50;
            3     2    1.010   0       0   23.4  94.2   19.0     0      40;
            4     3    1.0     0       0     0   47.8   -3.9     0       0;
            5     3    1.0     0       0     0    7.6    1.6     0       0;
            6     2    1.070   0       0   12.2  11.2    7.5    -6      24;
            7     3    1.0     0       0     0    0.0    0.0     0       0;
            8     2    1.090   0       0   17.4   0.0    0.0    -6      24;
            9     3    1.0     0       0     0   29.5   16.6     0       0;
            10    3    1.0     0       0     0    9.0    5.8     0       0;
            11    3    1.0     0       0     0    3.5    1.8     0       0;
            12    3    1.0     0       0     0    6.1    1.6     0       0;
            13    3    1.0     0       0     0   13.5    5.8     0       0;
            14    3    1.0     0       0     0   14.9    5.0     0       0;];
        
 %         |Bus | Type | Vsp | theta | PGi | QGi | PLi | QLi |  Qmin | Qmax |
busdata30 = [ 1     1    1.06    0       0     0     0     0       0       0;
            2     2    1.043   0      40   50.0  21.7   12.7    -40     50;
            3     3    1.0     0       0     0    2.4    1.2     0       0;
            4     3    1.06    0       0     0    7.6    1.6     0       0;
            5     2    1.01    0       0   37.0  94.2   19.0    -40     40;
            6     3    1.0     0       0     0    0.0    0.0     0       0;
            7     3    1.0     0       0     0   22.8   10.9     0       0;
            8     2    1.01    0       0   37.3  30.0   30.0    -10     40;
            9     3    1.0     0       0     0    0.0    0.0     0       0;
            10    3    1.0     0       0     0    5.8    2.0     0       0;
            11    2    1.082   0       0   16.2   0.0    0.0    -6      24;
            12    3    1.0     0       0     0   11.2    7.5     0       0;
            13    2    1.071   0       0   10.6   0.0    0.0    -6      24;
            14    3    1.0     0       0     0    6.2    1.6     0       0;
            15    3    1.0     0       0     0    8.2    2.5     0       0;
            16    3    1.0     0       0     0    3.5    1.8     0       0;
            17    3    1.0     0       0     0    9.0    5.8     0       0;
            18    3    1.0     0       0     0    3.2    0.9     0       0;
            19    3    1.0     0       0     0    9.5    3.4     0       0;
            20    3    1.0     0       0     0    2.2    0.7     0       0;
            21    3    1.0     0       0     0   17.5   11.2     0       0;
            22    3    1.0     0       0     0    0.0    0.0     0       0;
            23    3    1.0     0       0     0    3.2    1.6     0       0;
            24    3    1.0     0       0     0    8.7    6.7     0       0;
            25    3    1.0     0       0     0    0.0    0.0     0       0;
            26    3    1.0     0       0     0    3.5    2.3     0       0;
            27    3    1.0     0       0     0    0.0    0.0     0       0;
            28    3    1.0     0       0     0    0.0    0.0     0       0;
            29    3    1.0     0       0     0    2.4    0.9     0       0;
            30    3    1.0     0       0     0   10.6    1.9     0       0 ];
        
switch num
    case 3
        busdt = busdata3;
    case 14
        busdt = busdata14;
    case 30
        busdt = busdata30;
end
function linedt = linedatas(num)

%         |  From |  To   |   R     |   X     |     B/2  |  X'mer  |
%         |  Bus  | Bus   |  pu     |  pu     |     pu   | TAP (a) |
linedata3=[   1      2       0.01     0.03          0        1
              1      3       0.02     0.05          0        1
              2      3       0.03     0.08          0         1];
          
linedata14 =[1      2       0.01938   0.05917    0.0264         1
             1      5       0.05403   0.22304    0.0246         1
             2      3       0.04699   0.19797    0.0219         1
             2      4       0.05811   0.17632    0.0170         1
             2      5       0.05695   0.17388    0.0173         1
             3      4       0.06701   0.17103    0.0064         1
             4      5       0.01335   0.04211    0.0            1
             4      7       0.0       0.20912    0.0        0.978
             4      9       0.0       0.55618    0.0        0.969
             5      6       0.0       0.25202    0.0        0.932
             6     11       0.09498   0.19890    0.0            1
             6     12       0.12291   0.25581    0.0            1
             6     13       0.06615   0.13027    0.0            1
             7      8       0.0       0.17615    0.0            1
             7      9       0.0       0.11001    0.0            1
             9     10       0.03181   0.08450    0.0            1
             9     14       0.12711   0.27038    0.0            1
            10     11       0.08205   0.19207    0.0            1
            12     13       0.22092   0.19988    0.0            1
            13     14       0.17093   0.34802    0.0            1 ];
        
%         |  From |  To   |   R     |   X     |     B/2  |  X'mer  |
%         |  Bus  | Bus   |  pu     |  pu     |     pu   | TAP (a) |
linedata30 =[1      2       0.0192    0.0575     0.0264         1
             1      3       0.0452    0.1652     0.0204         1
             2      4       0.0570    0.1737     0.0184         1
             3      4       0.0132    0.0379     0.0042         1
             2      5       0.0472    0.1983     0.0209         1
             2      6       0.0581    0.1763     0.0187         1
             4      6       0.0119    0.0414     0.0045         1
             5      7       0.0460    0.1160     0.0102         1
             6      7       0.0267    0.0820     0.0085         1
             6      8       0.0120    0.0420     0.0045         1
             6      9       0.0       0.2080     0.0        0.978
             6     10       0.0       0.5560     0.0        0.969
             9     11       0.0       0.2080     0.0            1
             9     10       0.0       0.1100     0.0            1
             4     12       0.0       0.2560     0.0        0.932
            12     13       0.0       0.1400     0.0            1
            12     14       0.1231    0.2559     0.0            1
            12     15       0.0662    0.1304     0.0            1
            12     16       0.0945    0.1987     0.0            1
            14     15       0.2210    0.1997     0.0            1
            16     17       0.0824    0.1923     0.0            1
            15     18       0.1073    0.2185     0.0            1
            18     19       0.0639    0.1292     0.0            1
            19     20       0.0340    0.0680     0.0            1
            10     20       0.0936    0.2090     0.0            1
            10     17       0.0324    0.0845     0.0            1
            10     21       0.0348    0.0749     0.0            1
            10     22       0.0727    0.1499     0.0            1
            21     23       0.0116    0.0236     0.0            1
            15     23       0.1000    0.2020     0.0            1
            22     24       0.1150    0.1790     0.0            1
            23     24       0.1320    0.2700     0.0            1
            24     25       0.1885    0.3292     0.0            1
            25     26       0.2544    0.3800     0.0            1
            25     27       0.1093    0.2087     0.0            1
            28     27       0.0       0.3960     0.0        0.968
            27     29       0.2198    0.4153     0.0            1
            27     30       0.3202    0.6027     0.0            1
            29     30       0.2399    0.4533     0.0            1
             8     28       0.0636    0.2000     0.0214         1
             6     28       0.0169    0.0599     0.065          1 ];
         
switch num
    case 3
        linedt = linedata3;
    case 14
        linedt = linedata14;
    case 30
        linedt = linedata30;
end
% Polar to Rectangular Conversion
% Praviraj P G, MTech I Year, EE Dept., IIT Roorkee, India, Email :pravirajpg@gmail.com
% [RECT] = RECT2POL(RHO, THETA)
% RECT - Complex matrix or number, RECT = A + jB, A = Real, B = Imaginary
% RHO - Magnitude
% THETA - Angle in radians

function rect = pol2rect(rho,theta)
rect = rho.*cos(theta) + j*rho.*sin(theta);
% Polar to Rectangular Conversion
% Praviraj P G, MTech I Year, EE Dept., IIT Roorkee, India, Email :pravirajpg@gmail.com
% [RHO THETA] = RECT2POL(X)
% X - Complex matrix or number, X = A + jB
% RHO - Magnitude
% THETA - Angle in radians

function [rho theta] = rect2pol(x)
rho = sqrt(real(x).^2 + imag(x).^2);
theta = atan(imag(x)./real(x));
% Power System State Estimation using Weighted Least Square Method..
%Sample study system:  IEEE - 14 or IEEE - 30 bus system..(for IEEE-14 bus system replace 30 by 14)...
% Text book example problem: Power system state estimation
% 3 bus system considered now...also you can test 14 bus and 30 bus system
num = 3; % 3 BUS

ybus = ybusppg(num); % Get YBus..
zdata = zdatas(num); % Get Measurement data..
bpq = bbusppg(num); % Get B data..
nbus = max(max(zdata(:,4)),max(zdata(:,5))); % Get number of buses..
type = zdata(:,2); % Type of measurement, Vi - 1, Pi - 2, Qi - 3, Pij - 4, Qij - 5, Iij - 6..
z = zdata(:,3); % Measuement values..
fbus = zdata(:,4); % From bus..
tbus = zdata(:,5); % To bus..
Ri = diag(zdata(:,6)); % Measurement Error..
V = ones(nbus,1); % Initialize the bus voltages..
del = zeros(nbus,1); % Initialize the bus angles..
E = [del(2:end); V];   % State Vector..
G = real(ybus);
B = imag(ybus);

vi = find(type == 1); % Index of voltage magnitude measurements..
ppi = find(type == 2); % Index of real power injection measurements..
qi = find(type == 3); % Index of reactive power injection measurements..
pf = find(type == 4); % Index of real powerflow measurements..
qf = find(type == 5); % Index of reactive powerflow measurements..

nvi = length(vi); % Number of Voltage measurements..
npi = length(ppi); % Number of Real Power Injection measurements..
nqi = length(qi); % Number of Reactive Power Injection measurements..
npf = length(pf); % Number of Real Power Flow measurements..
nqf = length(qf); % Number of Reactive Power Flow measurements..

iter = 1;
tol = 5;

while(tol > 1e-4)
    
    %Measurement Function, h
    h1 = V(fbus(vi),1);
    h2 = zeros(npi,1);
    h3 = zeros(nqi,1);
    h4 = zeros(npf,1);
    h5 = zeros(nqf,1);
    
    for i = 1:npi
        m = fbus(ppi(i));
        for k = 1:nbus
            h2(i) = h2(i) + V(m)*V(k)*(G(m,k)*cos(del(m)-del(k)) + B(m,k)*sin(del(m)-del(k)));
        end
    end
    
    for i = 1:nqi
        m = fbus(qi(i));
        for k = 1:nbus
            h3(i) = h3(i) + V(m)*V(k)*(G(m,k)*sin(del(m)-del(k)) - B(m,k)*cos(del(m)-del(k)));
        end
    end
    
    for i = 1:npf
        m = fbus(pf(i));
        n = tbus(pf(i));
        h4(i) = -V(m)^2*G(m,n) - V(m)*V(n)*(-G(m,n)*cos(del(m)-del(n)) - B(m,n)*sin(del(m)-del(n)));
    end
    
    for i = 1:nqf
        m = fbus(qf(i));
        n = tbus(qf(i));
        h5(i) = -V(m)^2*(-B(m,n)+bpq(m,n)) - V(m)*V(n)*(-G(m,n)*sin(del(m)-del(n)) + B(m,n)*cos(del(m)-del(n)));
    end
    
    h = [h1; h2; h3; h4; h5];
    
    % Residue..
    r = z - h;
    
    % Jacobian..
    % H11 - Derivative of V with respect to angles.. All Zeros
    H11 = zeros(nvi,nbus-1);

    % H12 - Derivative of V with respect to V.. 
    H12 = zeros(nvi,nbus);
    for k = 1:nvi
        for n = 1:nbus
            if n == k
                H12(k,n) = 1;
            end
        end
    end

    % H21 - Derivative of Real Power Injections with Angles..
    H21 = zeros(npi,nbus-1);
    for i = 1:npi
        m = fbus(ppi(i));
        for k = 1:(nbus-1)
            if k+1 == m
                for n = 1:nbus
                    H21(i,k) = H21(i,k) + V(m)* V(n)*(-G(m,n)*sin(del(m)-del(n)) + B(m,n)*cos(del(m)-del(n)));
                end
                H21(i,k) = H21(i,k) - V(m)^2*B(m,m);
            else
                H21(i,k) = V(m)* V(k+1)*(G(m,k+1)*sin(del(m)-del(k+1)) - B(m,k+1)*cos(del(m)-del(k+1)));
            end
        end
    end
    
    % H22 - Derivative of Real Power Injections with V..
    H22 = zeros(npi,nbus);
    for i = 1:npi
        m = fbus(ppi(i));
        for k = 1:(nbus)
            if k == m
                for n = 1:nbus
                    H22(i,k) = H22(i,k) + V(n)*(G(m,n)*cos(del(m)-del(n)) + B(m,n)*sin(del(m)-del(n)));
                end
                H22(i,k) = H22(i,k) + V(m)*G(m,m);
            else
                H22(i,k) = V(m)*(G(m,k)*cos(del(m)-del(k)) + B(m,k)*sin(del(m)-del(k)));
            end
        end
    end
    
    % H31 - Derivative of Reactive Power Injections with Angles..
    H31 = zeros(nqi,nbus-1);
    for i = 1:nqi
        m = fbus(qi(i));
        for k = 1:(nbus-1)
            if k+1 == m
                for n = 1:nbus
                    H31(i,k) = H31(i,k) + V(m)* V(n)*(G(m,n)*cos(del(m)-del(n)) + B(m,n)*sin(del(m)-del(n)));
                end
                H31(i,k) = H31(i,k) - V(m)^2*G(m,m);
            else
                H31(i,k) = V(m)* V(k+1)*(-G(m,k+1)*cos(del(m)-del(k+1)) - B(m,k+1)*sin(del(m)-del(k+1)));
            end
        end
    end
    
    % H32 - Derivative of Reactive Power Injections with V..
    H32 = zeros(nqi,nbus);
    for i = 1:nqi
        m = fbus(qi(i));
        for k = 1:(nbus)
            if k == m
                for n = 1:nbus
                    H32(i,k) = H32(i,k) + V(n)*(G(m,n)*sin(del(m)-del(n)) - B(m,n)*cos(del(m)-del(n)));
                end
                H32(i,k) = H32(i,k) - V(m)*B(m,m);
            else
                H32(i,k) = V(m)*(G(m,k)*sin(del(m)-del(k)) - B(m,k)*cos(del(m)-del(k)));
            end
        end
    end
    
    % H41 - Derivative of Real Power Flows with Angles..
    H41 = zeros(npf,nbus-1);
    for i = 1:npf
        m = fbus(pf(i));
        n = tbus(pf(i));
        for k = 1:(nbus-1)
            if k+1 == m
                H41(i,k) = V(m)* V(n)*(-G(m,n)*sin(del(m)-del(n)) + B(m,n)*cos(del(m)-del(n)));
            else if k+1 == n
                H41(i,k) = -V(m)* V(n)*(-G(m,n)*sin(del(m)-del(n)) + B(m,n)*cos(del(m)-del(n)));
                else
                    H41(i,k) = 0;
                end
            end
        end
    end
    
    % H42 - Derivative of Real Power Flows with V..
    H42 = zeros(npf,nbus);
    for i = 1:npf
        m = fbus(pf(i));
        n = tbus(pf(i));
        for k = 1:nbus
            if k == m
                H42(i,k) = -V(n)*(-G(m,n)*cos(del(m)-del(n)) - B(m,n)*sin(del(m)-del(n))) - 2*G(m,n)*V(m);
            else if k == n
                H42(i,k) = -V(m)*(-G(m,n)*cos(del(m)-del(n)) - B(m,n)*sin(del(m)-del(n)));
                else
                    H42(i,k) = 0;
                end
            end
        end
    end
    
    % H51 - Derivative of Reactive Power Flows with Angles..
    H51 = zeros(nqf,nbus-1);
    for i = 1:nqf
        m = fbus(qf(i));
        n = tbus(qf(i));
        for k = 1:(nbus-1)
            if k+1 == m
                H51(i,k) = -V(m)* V(n)*(-G(m,n)*cos(del(m)-del(n)) - B(m,n)*sin(del(m)-del(n)));
            else if k+1 == n
                H51(i,k) = V(m)* V(n)*(-G(m,n)*cos(del(m)-del(n)) - B(m,n)*sin(del(m)-del(n)));
                else
                    H51(i,k) = 0;
                end
            end
        end
    end
    
    % H52 - Derivative of Reactive Power Flows with V..
    H52 = zeros(nqf,nbus);
    for i = 1:nqf
        m = fbus(qf(i));
        n = tbus(qf(i));
        for k = 1:nbus
            if k == m
                H52(i,k) = -V(n)*(-G(m,n)*sin(del(m)-del(n)) + B(m,n)*cos(del(m)-del(n))) - 2*V(m)*(-B(m,n)+ bpq(m,n));
            else if k == n
                H52(i,k) = -V(m)*(-G(m,n)*sin(del(m)-del(n)) + B(m,n)*cos(del(m)-del(n)));
                else
                    H52(i,k) = 0;
                end
            end
        end
    end
    
    % Measurement Jacobian, H..
    H = [H11 H12; H21 H22; H31 H32; H41 H42; H51 H52];
    
    % Gain Matrix, Gm..
    Gm = H'*inv(Ri)*H;
    
    %Objective Function..
    J = sum(inv(Ri)*r.^2);  
    
    % State Vector..
    dE = inv(Gm)*(H'*inv(Ri)*r);
    E = E + dE;
    del(2:end) = E(1:nbus-1);
    V = E(nbus:end);
    iter = iter + 1;
    tol = max(abs(dE));
end

CvE = diag(inv(H'*inv(Ri)*H)); % Covariance matrix..

Del = 180/pi*del;
E2 = [V Del]; % Bus Voltages and angles..
disp('-------- State Estimation ------------------');
disp('--------------------------');
disp('| Bus |    V   |  Angle  | ');
disp('| No  |   pu   |  Degree | ');
disp('--------------------------');
for m = 1:nbus
    fprintf('%4g', m); fprintf('  %8.4f', V(m)); fprintf('   %8.4f', Del(m)); fprintf('\n');
end
disp('---------------------------------------------');
% Program to form Admittance And Impedance Bus Formation....
% with Transformer Tap setting..

function ybus = ybusppg(num)  % Returns ybus

linedata = linedatas(num); % Calling "linedata6.m" for Line Data...
fb = linedata(:,1);     % From bus number...
tb = linedata(:,2);     % To bus number...
r = linedata(:,3);      % Resistance, R...
x = linedata(:,4);      % Reactance, X...
b = linedata(:,5);      % Ground Admittance, B/2...
a = linedata(:,6);      % Tap setting value..
z = r + i*x;            % Z matrix...
y = 1./z;               % To get inverse of each element...
b = i*b;                % Make B imaginary...

nbus = max(max(fb),max(tb));    % no. of buses...
nbranch = length(fb);           % no. of branches...
ybus = zeros(nbus,nbus);        % Initialise YBus...
 
 % Formation of the Off Diagonal Elements...
 for k=1:nbranch
     ybus(fb(k),tb(k)) = ybus(fb(k),tb(k))-y(k)/a(k);
     ybus(tb(k),fb(k)) = ybus(fb(k),tb(k));
 end
 
 % Formation of Diagonal Elements....
 for m =1:nbus
     for n =1:nbranch
         if fb(n) == m
             ybus(m,m) = ybus(m,m) + y(n)/(a(n)^2) + b(n);
         elseif tb(n) == m
             ybus(m,m) = ybus(m,m) + y(n) + b(n);
         end
     end
 end
 %ybus;                  % Bus Admittance Matrix
 %zbus = inv(ybus);      % Bus Impedance Matrix
 % Traditional Measurement Data..
% Vi - 1, Pi - 2, Qi - 3, Pij - 4, Qij - 5, Iij - 6;

function zdt = zdatas(num)

%         |Msnt |Type | Value | From | To | Rii | 

zdata3    =[1    1    1.006     1      0    0.004;
            2    1    0.968     2      0    0.004;
            3    2   -0.501     2      0    0.010;
            4    3   -0.286     2      0    0.010;
            5    4    0.888     1      2    0.008;
            6    4    1.173     1      3    0.008;
            7    5    0.568     1      2    0.008;
            8    5    0.663     1      3    0.008];
zdata14   = [ %---- Voltage Magnitude ------------%
                1     1    1.06     1       0   9e-4;
            %-----------------------------------%
            %---- Real Power Injection ---------%
            2     2    0.1830   2       0   1e-4;
            3     2   -0.9420   3       0   1e-4; 
            4     2    0.00     7       0   1e-4;
            5     2    0.00     8       0   1e-4; 
            6     2   -0.0900  10       0   1e-4;
            7     2   -0.0350  11       0   1e-4;
            8     2   -0.0610  12       0   1e-4; 
            9     2   -0.1490  14       0   1e-4;
           %------------------------------------%
           %---- Reative Power Injection -------%
           10     3    0.3523   2       0   1e-4;
           11     3    0.0876   3       0   1e-4; 
           12     3    0.00     7       0   1e-4;
           13     3    0.2103   8       0   1e-4; 
           14     3   -0.0580  10       0   1e-4;
           15     3   -0.0180  11       0   1e-4;
           16     3   -0.0160  12       0   1e-4; 
           17     3   -0.0500  14       0   1e-4;
           %------------------------------------%
           %------ Real Power Flow ------------- %
           18     4    1.5708   1       2   64e-6;
           19     4    0.7340   2       3   64e-6;
           20     4   -0.5427   4       2   64e-6;
           21     4    0.2707   4       7   64e-6;
           22     4    0.1546   4       9   64e-6;
           23     4   -0.4081   5       2   64e-6;
           24     4    0.6006   5       4   64e-6;
           25     4    0.4589   5       6   64e-6;
           26     4    0.1834   6      13   64e-6;
           27     4    0.2707   7       9   64e-6;
           28     4   -0.0816  11       6   64e-6;
           29     4    0.0188  12      13   64e-6;
           %------------------------------------%
           %------ Real Power Flow ------------- %
           30     5   -0.1748   1       2   64e-6;
           31     5    0.0594   2       3   64e-6;
           32     5    0.0213   4       2   64e-6;
           33     5   -0.1540   4       7   64e-6;
           34     5   -0.0264   4       9   64e-6;
           35     5   -0.0193   5       2   64e-6;
           36     5   -0.1006   5       4   64e-6;
           37     5   -0.2084   5       6   64e-6;
           38     5    0.0998   6      13   64e-6;
           39     5    0.1480   7       9   64e-6;
           40     5   -0.0864  11       6   64e-6;
           41     5    0.0141  12      13   64e-6;];
           %--------------------------------------%
           
 %         |Msnt |Type | Value | From | To | Rii | 
zdata30   = [ %---- Voltage Magnitude ------------%
            1     1    1.06     1       0   9e-4;
            %-----------------------------------%
            %---- Real Power Injection ---------%
            2     2   -0.0760   4       0   1e-4;
            3     2   -0.9420   5       0   1e-4; 
            4     2    0.00     6       0   1e-4;
            5     2   -0.3000   8       0   1e-4; 
            6     2   -0.0580  10       0   1e-4;
            7     2    0.00    11       0   1e-4;
            8     2    0.00    13       0   1e-4; 
            9     2   -0.0621  14       0   1e-4;
           10     2   -0.0819  15       0   1e-4;
           11     2   -0.0350  16       0   1e-4; 
           12     2   -0.0320  18       0   1e-4;
           13     2   -0.0220  20       0   1e-4;
           14     2   -0.1750  21       0   1e-4; 
           15     2   -0.0870  24       0   1e-4;
           16     2    0.00    25       0   1e-4;
           17     2   -0.0350  26       0   1e-4; 
           18     2    0.00    28       0   1e-4;
           19     2   -0.0240  29       0   1e-4;
           %------------------------------------%
           %---- Reative Power Injection -------%
           20     3   -0.0160   4       0   1e-4;
           21     3    0.1538   5       0   1e-4; 
           22     3    0.00     6       0   1e-4;
           23     3    0.2096   8       0   1e-4; 
           24     3   -0.0200  10       0   1e-4;
           25     3    0.2066  11       0   1e-4;
           26     3    0.1483  13       0   1e-4; 
           27     3   -0.0160  14       0   1e-4;
           28     3   -0.0250  15       0   1e-4;
           29     3   -0.0180  16       0   1e-4; 
           30     3   -0.0090  18       0   1e-4;
           31     3   -0.0070  20       0   1e-4;
           32     3   -0.1120  21       0   1e-4; 
           33     3   -0.0670  24       0   1e-4;
           34     3    0.00    25       0   1e-4;
           35     3   -0.0230  26       0   1e-4; 
           36     3    0.00    28       0   1e-4;
           37     3   -0.0090  29       0   1e-4;
           %------------------------------------%
           %------ Real Power Flow ------------- %
           38     4    0.4377   2       4   64e-6;
           39     4    0.8213   2       5   64e-6;
           40     4   -0.8487   3       1   64e-6;
           41     4   -0.8160   4       3   64e-6;
           42     4    0.7161   4       6   64e-6;
           43     4   -0.1475   5       7   64e-6;
           44     4   -0.5836   6       2   64e-6;
           45     4   -0.3772   7       6   64e-6;
           46     4   -0.2705   9       6   64e-6;
           47     4   -0.1539  10       6   64e-6;
           48     4   -0.2705  10       9   64e-6;
           49     4    0.0810  12      14   64e-6;
           50     4   -0.1786  15      12   64e-6;
           51     4    0.0623  15      18   64e-6;
           52     4    0.0423  16      17   64e-6;
           53     4   -0.0480  17      10   64e-6;
           54     4   -0.0623  19      20   64e-6;
           55     4   -0.0844  20      10   64e-6;
           56     4   -0.1760  21      10   64e-6;
           57     4    0.00    21      22   64e-6;
           58     4   -0.0554  22      10   64e-6;
           59     4    0.0177  23      24   64e-6;
           60     4   -0.0549  24      22   64e-6;
           61     4   -0.0500  25      27   64e-6;
           62     4   -0.1832  27      28   64e-6;
           63     4   -0.1883  28      6    64e-6;
           64     4    0.0370  29      30   64e-6;
           65     4   -0.0693  30      27   64e-6;
           %------------------------------------%
           %------ Real Power Flow ------------- %
           66     5    0.0451   2       4   64e-6;
           67     5    0.0402   2       5   64e-6;
           68     5    0.0577   3       1   64e-6;
           69     5    0.0687   4       3   64e-6;
           70     5   -0.2202   4       6   64e-6;
           71     5    0.1027   5       7   64e-6;
           72     5    0.0624   6       2   64e-6;
           73     5    0.0089   7       6   64e-6;
           74     5    0.1463   9       6   64e-6;
           75     5    0.0244  10       6   64e-6;
           76     5   -0.1599  10       9   64e-6;
           77     5    0.0327  12      14   64e-6;
           78     5   -0.0977  15      12   64e-6;
           79     5    0.0310  15      18   64e-6;
           80     5    0.0420  16      17   64e-6;
           81     5   -0.0167  17      10   64e-6;
           82     5   -0.0133  19      20   64e-6;
           83     5   -0.0205  20      10   64e-6;
           84     5   -0.0973  21      10   64e-6;
           85     5    0.00    21      22   64e-6;
           86     5   -0.0361  22      10   64e-6;
           87     5    0.0248  23      24   64e-6;
           88     5   -0.0353  24      22   64e-6;
           89     5   -0.0309  25      27   64e-6;
           90     5   -0.0219  27      28   64e-6;
           91     5    0.0399  28      6    64e-6;
           92     5    0.0061  29      30   64e-6;
           93     5   -0.0136  30      27   64e-6;];
           %--------------------------------------%
           
 switch num
    case 3
        zdt = zdata3;
    case 14
        zdt = zdata14;
    case 30
        zdt = zdata30;
 end
end