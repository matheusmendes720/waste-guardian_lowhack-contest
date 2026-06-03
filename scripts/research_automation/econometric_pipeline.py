#!/usr/bin/env python3
"""
💰 ECONOMETRIC PIPELINE - Low Hack 2026
OSINT to C-Level Financial Metrics Converter

Purpose: Convert raw waste reduction data into executive-ready financial metrics
Author: Waste Guardian Team
Date: 2026-04-03
"""

import json
import math
from dataclasses import dataclass, asdict
from typing import Dict, List, Optional, Tuple
from datetime import datetime
from enum import Enum


class IndustryVertical(Enum):
    """F&B industry verticals for targeted calculations"""
    DAIRY = "dairy"
    MEAT_PROCESSING = "meat_processing"
    BEVERAGES = "beverages"
    BAKERY = "bakery"
    PROCESSED_FOODS = "processed_foods"
    FROZEN_FOODS = "frozen_foods"


class CompanySize(Enum):
    """Company size tiers for scaling calculations"""
    SMALL = "small"           # < R$ 50M revenue
    MEDIUM = "medium"         # R$ 50M - 200M
    LARGE = "large"           # R$ 200M - 500M
    ENTERPRISE = "enterprise" # > R$ 500M


@dataclass
class WasteBaseline:
    """Baseline waste metrics for a facility"""
    facility_name: str
    vertical: IndustryVertical
    company_size: CompanySize
    annual_revenue_brl: float
    raw_material_cost_pct: float  # Typically 30-60% for F&B
    current_waste_pct: float      # Current waste percentage (typically 3-12%)
    production_lines: int
    employees: int
    operating_days_per_year: int = 250
    
    def calculate_raw_material_spend(self) -> float:
        """Calculate annual raw material expenditure"""
        return self.annual_revenue_brl * (self.raw_material_cost_pct / 100)
    
    def calculate_waste_cost(self) -> float:
        """Calculate annual cost of waste"""
        raw_spend = self.calculate_raw_material_spend()
        return raw_spend * (self.current_waste_pct / 100)


@dataclass
class SolutionMetrics:
    """Waste Guardian solution impact metrics"""
    waste_reduction_pct: float       # Expected waste reduction (typically 20-50%)
    implementation_cost_brl: float   # Initial setup cost
    annual_license_cost_brl: float   # Recurring SaaS cost
    implementation_days: int         # Time to deploy
    payback_period_months: float = 0.0  # Calculated
    
    def calculate_annual_savings(self, baseline: WasteBaseline) -> float:
        """Calculate annual savings from waste reduction"""
        current_waste_cost = baseline.calculate_waste_cost()
        return current_waste_cost * (self.waste_reduction_pct / 100)
    
    def calculate_payback_period(self, annual_savings: float) -> float:
        """Calculate payback period in months"""
        if annual_savings == 0:
            return float('inf')
        total_first_year_cost = self.implementation_cost_brl + self.annual_license_cost_brl
        years = total_first_year_cost / annual_savings
        return years * 12


@dataclass
class CLevelMetrics:
    """Executive-ready financial metrics"""
    # CFO Metrics
    roi_annual_pct: float
    opex_reduction_brl: float
    opex_reduction_pct: float
    payback_period_months: float
    npv_3year_brl: float
    
    # COO Metrics
    efficiency_gain_pct: float
    waste_rate_improvement_pct: float
    productivity_gain_brl: float
    
    # CEO Metrics
    strategic_value_score: int  # 1-10
    esg_impact_score: int       # 1-10
    competitive_advantage_years: float
    
    # Sustainability Metrics
    co2_reduction_tons_annual: float
    water_savings_m3_annual: float
    waste_diverted_from_landfill_tons: float


class EconometricPipeline:
    """
    Converts OSINT waste data into C-Level financial metrics
    """
    
    # Industry benchmarks (from research)
    INDUSTRY_BENCHMARKS = {
        IndustryVertical.DAIRY: {
            "avg_waste_pct": 5.5,
            "raw_material_cost_pct": 55.0,
            "co2_per_waste_ton": 2.5,
            "water_per_waste_ton": 1500
        },
        IndustryVertical.MEAT_PROCESSING: {
            "avg_waste_pct": 8.0,
            "raw_material_cost_pct": 60.0,
            "co2_per_waste_ton": 8.0,
            "water_per_waste_ton": 5000
        },
        IndustryVertical.BEVERAGES: {
            "avg_waste_pct": 4.0,
            "raw_material_cost_pct": 35.0,
            "co2_per_waste_ton": 1.5,
            "water_per_waste_ton": 800
        },
        IndustryVertical.BAKERY: {
            "avg_waste_pct": 6.0,
            "raw_material_cost_pct": 40.0,
            "co2_per_waste_ton": 1.8,
            "water_per_waste_ton": 1200
        },
        IndustryVertical.PROCESSED_FOODS: {
            "avg_waste_pct": 5.0,
            "raw_material_cost_pct": 45.0,
            "co2_per_waste_ton": 2.2,
            "water_per_waste_ton": 1800
        },
        IndustryVertical.FROZEN_FOODS: {
            "avg_waste_pct": 7.0,
            "raw_material_cost_pct": 50.0,
            "co2_per_waste_ton": 3.0,
            "water_per_waste_ton": 2000
        }
    }
    
    # Company size multipliers for solution complexity
    SIZE_MULTIPLIERS = {
        CompanySize.SMALL: {
            "implementation_cost": 25000,
            "annual_license": 12000,
            "waste_reduction_potential": 0.25  # 25% max reduction
        },
        CompanySize.MEDIUM: {
            "implementation_cost": 75000,
            "annual_license": 36000,
            "waste_reduction_potential": 0.35
        },
        CompanySize.LARGE: {
            "implementation_cost": 150000,
            "annual_license": 72000,
            "waste_reduction_potential": 0.45
        },
        CompanySize.ENTERPRISE: {
            "implementation_cost": 300000,
            "annual_license": 144000,
            "waste_reduction_potential": 0.50
        }
    }
    
    def __init__(self):
        self.calculations_log = []
    
    def create_baseline_from_osint(
        self,
        facility_name: str,
        vertical: str,
        size: str,
        annual_revenue: float,
        reported_waste_pct: Optional[float] = None
    ) -> WasteBaseline:
        """
        Create baseline from OSINT research data
        """
        vertical_enum = IndustryVertical(vertical)
        size_enum = CompanySize(size)
        
        # Use industry benchmark if specific data not available
        benchmark = self.INDUSTRY_BENCHMARKS[vertical_enum]
        waste_pct = reported_waste_pct or benchmark["avg_waste_pct"]
        
        baseline = WasteBaseline(
            facility_name=facility_name,
            vertical=vertical_enum,
            company_size=size_enum,
            annual_revenue_brl=annual_revenue,
            raw_material_cost_pct=benchmark["raw_material_cost_pct"],
            current_waste_pct=waste_pct,
            production_lines=self._estimate_lines(size_enum),
            employees=self._estimate_employees(size_enum)
        )
        
        self.calculations_log.append({
            "timestamp": datetime.now().isoformat(),
            "action": "baseline_created",
            "facility": facility_name,
            "data": asdict(baseline)
        })
        
        return baseline
    
    def _estimate_lines(self, size: CompanySize) -> int:
        """Estimate production lines by company size"""
        estimates = {
            CompanySize.SMALL: 2,
            CompanySize.MEDIUM: 5,
            CompanySize.LARGE: 12,
            CompanySize.ENTERPRISE: 25
        }
        return estimates[size]
    
    def _estimate_employees(self, size: CompanySize) -> int:
        """Estimate employees by company size"""
        estimates = {
            CompanySize.SMALL: 50,
            CompanySize.MEDIUM: 200,
            CompanySize.LARGE: 800,
            CompanySize.ENTERPRISE: 2500
        }
        return estimates[size]
    
    def calculate_solution_metrics(self, baseline: WasteBaseline) -> SolutionMetrics:
        """
        Calculate Waste Guardian solution metrics for a baseline
        """
        size_multipliers = self.SIZE_MULTIPLIERS[baseline.company_size]
        
        # Calculate optimal waste reduction (based on benchmarks)
        potential_reduction = size_multipliers["waste_reduction_potential"]
        
        # Adjust for current performance (worse performance = more room for improvement)
        benchmark_waste = self.INDUSTRY_BENCHMARKS[baseline.vertical]["avg_waste_pct"]
        if baseline.current_waste_pct > benchmark_waste:
            # Above average waste = can achieve higher reduction
            potential_reduction = min(0.55, potential_reduction * 1.2)
        
        solution = SolutionMetrics(
            waste_reduction_pct=potential_reduction * 100,
            implementation_cost_brl=size_multipliers["implementation_cost"],
            annual_license_cost_brl=size_multipliers["annual_license"],
            implementation_days=self._estimate_implementation_days(baseline.company_size)
        )
        
        # Calculate payback
        annual_savings = solution.calculate_annual_savings(baseline)
        solution.payback_period_months = solution.calculate_payback_period(annual_savings)
        
        return solution
    
    def _estimate_implementation_days(self, size: CompanySize) -> int:
        """Estimate implementation timeline"""
        estimates = {
            CompanySize.SMALL: 14,
            CompanySize.MEDIUM: 30,
            CompanySize.LARGE: 60,
            CompanySize.ENTERPRISE: 90
        }
        return estimates[size]
    
    def calculate_c_level_metrics(
        self,
        baseline: WasteBaseline,
        solution: SolutionMetrics
    ) -> CLevelMetrics:
        """
        Calculate executive-ready C-Level metrics
        """
        annual_savings = solution.calculate_annual_savings(baseline)
        
        # CFO Metrics
        total_first_year = solution.implementation_cost_brl + solution.annual_license_cost_brl
        roi_annual = ((annual_savings - solution.annual_license_cost_brl) / 
                     total_first_year * 100)
        
        opex_reduction = annual_savings - solution.annual_license_cost_brl
        opex_reduction_pct = (opex_reduction / baseline.annual_revenue_brl) * 100
        
        # NPV calculation (3 years, 10% discount rate)
        npv = self._calculate_npv(annual_savings, solution.annual_license_cost_brl,
                                  solution.implementation_cost_brl)
        
        # COO Metrics
        efficiency_gain = (solution.waste_reduction_pct / baseline.current_waste_pct) * 100
        waste_rate_improvement = solution.waste_reduction_pct
        productivity_gain = annual_savings * 0.3  # 30% of savings from productivity
        
        # CEO Metrics
        strategic_value = self._calculate_strategic_score(baseline, solution)
        esg_impact = self._calculate_esg_score(baseline, solution)
        
        # Sustainability Metrics
        waste_tons_saved = self._calculate_waste_tons_saved(baseline, solution)
        benchmark = self.INDUSTRY_BENCHMARKS[baseline.vertical]
        
        co2_reduction = waste_tons_saved * benchmark["co2_per_waste_ton"]
        water_savings = waste_tons_saved * benchmark["water_per_waste_ton"]
        
        return CLevelMetrics(
            roi_annual_pct=roi_annual,
            opex_reduction_brl=opex_reduction,
            opex_reduction_pct=opex_reduction_pct,
            payback_period_months=solution.payback_period_months,
            npv_3year_brl=npv,
            efficiency_gain_pct=efficiency_gain,
            waste_rate_improvement_pct=waste_rate_improvement,
            productivity_gain_brl=productivity_gain,
            strategic_value_score=strategic_value,
            esg_impact_score=esg_impact,
            competitive_advantage_years=2.5,
            co2_reduction_tons_annual=co2_reduction,
            water_savings_m3_annual=water_savings,
            waste_diverted_from_landfill_tons=waste_tons_saved
        )
    
    def _calculate_npv(
        self,
        annual_savings: float,
        annual_cost: float,
        initial_investment: float,
        years: int = 3,
        discount_rate: float = 0.10
    ) -> float:
        """Calculate Net Present Value"""
        net_annual = annual_savings - annual_cost
        npv = -initial_investment
        
        for year in range(1, years + 1):
            npv += net_annual / ((1 + discount_rate) ** year)
        
        return npv
    
    def _calculate_strategic_score(
        self,
        baseline: WasteBaseline,
        solution: SolutionMetrics
    ) -> int:
        """Calculate strategic value score (1-10)"""
        score = 5  # Base score
        
        # Larger companies get more strategic value
        if baseline.company_size == CompanySize.ENTERPRISE:
            score += 2
        elif baseline.company_size == CompanySize.LARGE:
            score += 1
        
        # High waste = more strategic to fix
        if baseline.current_waste_pct > 8:
            score += 2
        elif baseline.current_waste_pct > 5:
            score += 1
        
        # Fast payback = more strategic
        if solution.payback_period_months < 6:
            score += 1
        
        return min(10, score)
    
    def _calculate_esg_score(
        self,
        baseline: WasteBaseline,
        solution: SolutionMetrics
    ) -> int:
        """Calculate ESG impact score (1-10)"""
        score = 5  # Base score
        
        # High reduction = high ESG impact
        if solution.waste_reduction_pct > 40:
            score += 3
        elif solution.waste_reduction_pct > 30:
            score += 2
        elif solution.waste_reduction_pct > 20:
            score += 1
        
        # Certain industries have higher ESG visibility
        if baseline.vertical in [IndustryVertical.MEAT_PROCESSING, IndustryVertical.DAIRY]:
            score += 1
        
        return min(10, score)
    
    def _calculate_waste_tons_saved(
        self,
        baseline: WasteBaseline,
        solution: SolutionMetrics
    ) -> float:
        """Calculate waste diverted from landfill in tons"""
        waste_cost = baseline.calculate_waste_cost()
        savings = waste_cost * (solution.waste_reduction_pct / 100)
        
        # Assume average cost per ton is R$ 2,000
        avg_cost_per_ton = 2000
        return savings / avg_cost_per_ton
    
    def generate_executive_summary(
        self,
        baseline: WasteBaseline,
        solution: SolutionMetrics,
        c_level: CLevelMetrics
    ) -> str:
        """Generate executive-ready summary text"""
        
        summary = f"""
╔══════════════════════════════════════════════════════════════════════════════╗
║                    WASTE GUARDIAN - EXECUTIVE SUMMARY                        ║
║                     {baseline.facility_name}                                ║
╚══════════════════════════════════════════════════════════════════════════════╝

📊 BUSINESS IMPACT
────────────────────────────────────────────────────────────────────────────────
Annual Waste Cost (Current):     R$ {baseline.calculate_waste_cost():,.2f}
Projected Annual Savings:        R$ {solution.calculate_annual_savings(baseline):,.2f}
Implementation Investment:       R$ {solution.implementation_cost_brl:,.2f}
Annual License:                  R$ {solution.annual_license_cost_brl:,.2f}
Payback Period:                  {c_level.payback_period_months:.1f} months
3-Year NPV:                      R$ {c_level.npv_3year_brl:,.2f}

💰 CFO METRICS
────────────────────────────────────────────────────────────────────────────────
Annual ROI:                      {c_level.roi_annual_pct:.1f}%
OPEX Reduction:                  R$ {c_level.opex_reduction_brl:,.2f} ({c_level.opex_reduction_pct:.2f}%)
Break-even:                      Month {math.ceil(c_level.payback_period_months)}

⚙️ COO METRICS  
────────────────────────────────────────────────────────────────────────────────
Waste Reduction:                 {solution.waste_reduction_pct:.1f}%
Efficiency Gain:                 {c_level.efficiency_gain_pct:.1f}%
Implementation Time:             {solution.implementation_days} days

🌱 SUSTAINABILITY METRICS
────────────────────────────────────────────────────────────────────────────────
CO2 Reduction:                   {c_level.co2_reduction_tons_annual:.1f} tons/year
Water Savings:                   {c_level.water_savings_m3_annual:,.0f} m³/year
Waste Diverted:                  {c_level.waste_diverted_from_landfill_tons:.1f} tons/year

🎯 STRATEGIC VALUE
────────────────────────────────────────────────────────────────────────────────
Strategic Score:                 {c_level.strategic_value_score}/10
ESG Impact Score:                {c_level.esg_impact_score}/10
Competitive Advantage:           {c_level.competitive_advantage_years} years

═══════════════════════════════════════════════════════════════════════════════
RECOMMENDATION: {"✅ PROCEED - High ROI" if c_level.roi_annual_pct > 50 else "⚠️ EVALUATE - Moderate returns"}
═══════════════════════════════════════════════════════════════════════════════
"""
        return summary
    
    def generate_pitch_metrics_json(
        self,
        baseline: WasteBaseline,
        solution: SolutionMetrics,
        c_level: CLevelMetrics
    ) -> Dict:
        """Generate JSON for pitch dashboard integration"""
        return {
            "facility": baseline.facility_name,
            "vertical": baseline.vertical.value,
            "generated_at": datetime.now().isoformat(),
            "metrics": {
                "financial": {
                    "annual_savings_brl": round(solution.calculate_annual_savings(baseline), 2),
                    "roi_pct": round(c_level.roi_annual_pct, 1),
                    "payback_months": round(c_level.payback_period_months, 1),
                    "npv_3year_brl": round(c_level.npv_3year_brl, 2),
                    "opex_reduction_pct": round(c_level.opex_reduction_pct, 2)
                },
                "operational": {
                    "waste_reduction_pct": round(solution.waste_reduction_pct, 1),
                    "efficiency_gain_pct": round(c_level.efficiency_gain_pct, 1),
                    "implementation_days": solution.implementation_days
                },
                "sustainability": {
                    "co2_reduction_tons": round(c_level.co2_reduction_tons_annual, 1),
                    "water_savings_m3": round(c_level.water_savings_m3_annual, 0),
                    "waste_diverted_tons": round(c_level.waste_diverted_from_landfill_tons, 1)
                },
                "strategic": {
                    "strategic_score": c_level.strategic_value_score,
                    "esg_score": c_level.esg_impact_score,
                    "competitive_advantage_years": c_level.competitive_advantage_years
                }
            }
        }


def main():
    """Demo execution with sample facilities"""
    print("=" * 80)
    print("💰 ECONOMETRIC PIPELINE - Low Hack 2026")
    print("   Waste Guardian Financial Impact Calculator")
    print("=" * 80)
    print()
    
    pipeline = EconometricPipeline()
    
    # Sample facilities for demonstration
    sample_facilities = [
        {
            "name": "Laticínios Sul Brasil - Plant 1",
            "vertical": "dairy",
            "size": "large",
            "revenue": 450000000  # R$ 450M
        },
        {
            "name": "Frigorífico Camaçari",
            "vertical": "meat_processing",
            "size": "enterprise",
            "revenue": 800000000  # R$ 800M
        },
        {
            "name": "Bebidas Nordeste SA",
            "vertical": "beverages",
            "size": "medium",
            "revenue": 120000000  # R$ 120M
        }
    ]
    
    all_results = []
    
    for facility_data in sample_facilities:
        print(f"\n{'='*80}")
        print(f"Processing: {facility_data['name']}")
        print(f"{'='*80}")
        
        # Create baseline
        baseline = pipeline.create_baseline_from_osint(
            facility_name=facility_data['name'],
            vertical=facility_data['vertical'],
            size=facility_data['size'],
            annual_revenue=facility_data['revenue']
        )
        
        # Calculate solution metrics
        solution = pipeline.calculate_solution_metrics(baseline)
        
        # Calculate C-Level metrics
        c_level = pipeline.calculate_c_level_metrics(baseline, solution)
        
        # Generate summary
        summary = pipeline.generate_executive_summary(baseline, solution, c_level)
        print(summary)
        
        # Store results
        all_results.append({
            "baseline": asdict(baseline),
            "solution": asdict(solution),
            "c_level": asdict(c_level)
        })
    
    # Save comprehensive report
    report_file = f"econometric_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump({
            "generated_at": datetime.now().isoformat(),
            "pipeline_version": "1.0.0",
            "facility_count": len(all_results),
            "results": all_results
        }, f, indent=2, default=str)
    
    print(f"\n{'='*80}")
    print(f"✅ Comprehensive report saved: {report_file}")
    print(f"📊 Facilities analyzed: {len(all_results)}")
    print(f"="*80)
    
    # Generate pitch-ready JSON for one facility
    if all_results:
        sample = all_results[0]
        baseline = WasteBaseline(**sample['baseline'])
        solution = SolutionMetrics(**sample['solution'])
        c_level = CLevelMetrics(**sample['c_level'])
        
        pitch_json = pipeline.generate_pitch_metrics_json(baseline, solution, c_level)
        
        pitch_file = f"pitch_metrics_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        with open(pitch_file, 'w', encoding='utf-8') as f:
            json.dump(pitch_json, f, indent=2)
        
        print(f"📈 Pitch metrics saved: {pitch_file}")


if __name__ == "__main__":
    main()
